
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
    
    // Use the total amount stored in the order, as it was calculated on the server before payment.
    const totalAmount = orderData.totalAmount;

    const mailOptions = {
        from: `Arrdublu <${functions.config().gmail.email}>`,
        to: customerEmail,
        subject: "Your Arrdublu Order Confirmation",
        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Thank you for your order!</h2>
            <p>Hi ${customerEmail.split('@')[0]},</p>
            <p>We've received your order and are getting it ready. Here are the details:</p>
            <h3>Order ID: ${orderData.id}</h3>
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr>
                        <th style="border-bottom: 1px solid #ddd; padding: 8px; text-align: left;">Item</th>
                        <th style="border-bottom: 1px solid #ddd; padding: 8px; text-align: left;">Quantity</th>
                        <th style="border-bottom: 1px solid #ddd; padding: 8px; text-align: right;">Price</th>
                    </tr>
                </thead>
                <tbody>
                    ${orderData.items
                      .map(
                        (item) =>
                          `<tr>
                             <td style="padding: 8px;">${item.name}</td>
                             <td style="padding: 8px;">${item.quantity}</td>
                             <td style="padding: 8px; text-align: right;">$${(item.price * item.quantity).toFixed(2)}</td>
                           </tr>`
                      )
                      .join("")}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2" style="padding: 8px; text-align: right; font-weight: bold;">Total:</td>
                        <td style="padding: 8px; text-align: right; font-weight: bold;">$${totalAmount.toFixed(2)}</td>
                    </tr>
                </tfoot>
            </table>
            <p>You can view your order history anytime by visiting your account page on our website.</p>
            <p>Thanks again for your purchase!</p>
            <p>The Arrdublu Team</p>
        </div>`,
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
            const orderDoc = await orderRef.get();
            
            if (orderDoc.exists) {
                const orderData = orderDoc.data();
                if (orderData.status === 'pending') {
                    await orderRef.update({
                        status: "paid",
                        paymentIntentId: session.payment_intent,
                        customerEmail: session.customer_details.email,
                    });
                    
                    const updatedOrderData = { 
                      id: orderId, 
                      ...orderData, 
                      customerEmail: session.customer_details.email,
                      // The totalAmount from the original orderData is already correct
                    };
                    await sendConfirmationEmail(updatedOrderData);
                } else {
                    console.warn(`Order ${orderId} was already in status: ${orderData.status}.`);
                }
            } else {
                console.error(`Order document not found for ID: ${orderId}`);
            }

        } catch (error) {
            console.error("Error handling checkout.session.completed:", error);
            return res.status(500).send("Internal Server Error");
        }
    }

    res.status(200).send();
});
