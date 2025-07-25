const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const stripe = require("stripe")(functions.config().stripe.secret);

admin.initializeApp();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password,
  },
});

const sendConfirmationEmail = async (orderData) => {
    const customerEmail = orderData.customerEmail || "customer@example.com"; // Fallback for testing
    const mailOptions = {
        from: functions.config().gmail.email,
        to: customerEmail,
        subject: "Order Confirmation",
        html: `<h1>Thank you for your order!</h1>
           <p>Your order details:</p>
           <ul>
             ${orderData.items
               .map(
                 (item) =>
                   `<li>${item.name} (x${item.quantity}) - $${item.price.toFixed(
                     2
                   )}</li>`
               )
               .join("")}
           </ul>
           <p>Total: $${orderData.totalAmount.toFixed(2)}</p>`,
      };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent to:", customerEmail);
  } catch (error) {
    console.error("Error sending confirmation email:", error);
  }
};

exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
    const sig = req.headers["stripe-signature"];
    const endpointSecret = functions.config().stripe.webhook_secret;

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
    } catch (err) {
        console.error("Webhook Error:", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        const orderId = session.metadata.orderId;

        console.log(`Processing order ${orderId} for session ${session.id}`);

        try {
            const orderRef = admin.firestore().collection("orders").doc(orderId);
            await orderRef.update({
                status: "paid",
                paymentIntentId: session.payment_intent,
                customerEmail: session.customer_details.email,
            });

            const orderDoc = await orderRef.get();
            const orderData = orderDoc.data();

            if (orderData) {
                await sendConfirmationEmail(orderData);
            } else {
                console.warn(`Order document not found for ID: ${orderId}`);
            }

        } catch (error) {
            console.error("Error handling checkout.session.completed:", error);
            return res.status(500).send("Internal Server Error");
        }
    }

    res.status(200).send();
});
