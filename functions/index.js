const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')(functions.config().stripe.secret);
const nodemailer = require('nodemailer');

admin.initializeApp();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password,
  },
});

const sendConfirmationEmail = async (orderData) => {
  const mailOptions = {
    from: functions.config().gmail.email,
    to: orderData.customerEmail,
    subject: 'Order Confirmation',
    text: `Thank you for your order, ${orderData.customerEmail}!

Your order details:

${orderData.items.map(item => `${item.name} (x${item.quantity}) - $${item.price.toFixed(2)}`).join('\n')}

Total: $${orderData.totalAmount.toFixed(2)}
`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent to:', orderData.customerEmail);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
};

const handlePaymentIntentSucceeded = async (paymentIntent) => {
  console.log('Handling payment_intent.succeeded for:', paymentIntent.id);
  const orderId = paymentIntent.metadata.orderId;

  if (orderId) {
    try {
      const orderRef = admin.firestore().collection('orders').doc(orderId);
      await orderRef.update({
        status: 'paid',
        paymentIntentId: paymentIntent.id,
      });
      console.log(`Order ${orderId} marked as paid.`);

      const orderDoc = await orderRef.get();
      const orderData = orderDoc.data();

      if (orderData) {
        await sendConfirmationEmail(orderData);

        for (const item of orderData.items) {
          const inventoryRef = admin.firestore().collection('inventory').doc(item.itemId);
          await inventoryRef.update({
            stock: admin.firestore.FieldValue.increment(-item.quantity)
          });
          console.log(`Updated stock for item ${item.itemId} by -${item.quantity}`);
        }
      } else {
        console.warn(`Order document not found for ID: ${orderId} after update.`);
      }
    } catch (error) {
      console.error('Error handling payment_intent.succeeded:', error);
    }
  } else {
    console.warn('No orderId found in payment intent metadata for:', paymentIntent.id);
  }
};

const handlePaymentMethodAttached = async (paymentMethod) => {
  console.log('Handling payment_method.attached for:', paymentMethod.id);
  const stripeCustomerId = paymentMethod.customer;

  if (stripeCustomerId) {
    try {
      const usersRef = admin.firestore().collection('users');
      const querySnapshot = await usersRef.where('stripeCustomerId', '==', stripeCustomerId).limit(1).get();

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        await userDoc.ref.update({
          paymentMethods: admin.firestore.FieldValue.arrayUnion(paymentMethod.id)
        });
        console.log(`Payment method ${paymentMethod.id} associated with user ${userDoc.id}`);
      } else {
        console.warn(`No internal user found for Stripe Customer ID: ${stripeCustomerId}`);
      }
    } catch (error) {
      console.error('Error handling payment_method.attached:', error);
    }
  } else {
    console.warn('No Stripe Customer ID found in payment method object:', paymentMethod.id);
  }
};

exports.handleStripeWebhook = functions.https.onRequest(async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = functions.config().stripe.webhook_secret;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook Error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('PaymentIntent was successful:', paymentIntent.id);
      handlePaymentIntentSucceeded(paymentIntent);
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      console.log('PaymentMethod was attached to a Customer:', paymentMethod.id);
      handlePaymentMethodAttached(paymentMethod);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.send();
});