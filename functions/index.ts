// The Cloud Functions for Firebase to process Stripe webhooks.

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')(functions.config().stripe.secret);
const nodemailer = require('nodemailer'); // Import Nodemailer

admin.initializeApp();

// Configure Nodemailer transporter (replace with your Google Workspace SMTP settings)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: functions.config().gmail.email, // Your Google Workspace email (e.g., hi@arrdublu.us)
    pass: functions.config().gmail.password, // Your Google Workspace application-specific password
  },
});

// Function to send confirmation email
const sendConfirmationEmail = async (orderData) => {
  const mailOptions = {
    from: functions.config().gmail.email, // Sender address
    to: orderData.customerEmail, // Recipient address
    subject: 'Order Confirmation', // Subject line
    text: `Thank you for your order, ${orderData.customerEmail}!

Your order details:

${orderData.items.map(item => `  - ${item.name} (x${item.quantity}) - $${item.price.toFixed(2)}`).join('
')}

Total: $${orderData.totalAmount.toFixed(2)}

`, // Plain text body
    // You can also add an HTML body for a more formatted email
    // html: '<p>...</p>'
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent to:', orderData.customerEmail);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
};

// Define a function to handle the 'payment_intent.succeeded' event
const handlePaymentIntentSucceeded = async (paymentIntent) => {
  console.log('Handling payment_intent.succeeded for:', paymentIntent.id);

  // Get the order ID from the payment intent metadata (assuming you added it there)
  const orderId = paymentIntent.metadata.orderId;

  if (orderId) {
    try {
      // Update your database to mark the order as paid
      const orderRef = admin.firestore().collection('orders').doc(orderId);
      await orderRef.update({
        status: 'paid',
        paymentIntentId: paymentIntent.id,
      });
      console.log(`Order ${orderId} marked as paid.`);

      // Fetch the updated order details
      const orderDoc = await orderRef.get();
      const orderData = orderDoc.data();

      if (orderData) {
        // --- Send Confirmation Email --- 
        await sendConfirmationEmail(orderData);

        // --- Update Inventory ---
        // Iterate through orderData.items and decrement inventory for each item.
        // You'll need to access your inventory collection and update the stock.
        console.log('Placeholder: Update inventory for items:', orderData.items);
        // Example (using a hypothetical updateInventory function):
        // for (const item of orderData.items) {
        //   await updateInventory(item.itemId, item.quantity);
        // }

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

// Define a function to handle the 'payment_method.attached' event
const handlePaymentMethodAttached = async (paymentMethod) => {
  console.log('Handling payment_method.attached for:', paymentMethod.id);

  // Assuming you have a way to link the Stripe Customer ID to your internal user ID
  const stripeCustomerId = paymentMethod.customer;

  if (stripeCustomerId) {
    try {
      // Find your internal user based on the Stripe Customer ID
      const usersRef = admin.firestore().collection('users');
      const querySnapshot = await usersRef.where('stripeCustomerId', '==', stripeCustomerId).limit(1).get();

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userId = userDoc.id;

        // Add the payment method ID to the user's document
        await userDoc.ref.update({
          paymentMethods: admin.firestore.FieldValue.arrayUnion(paymentMethod.id)
        });

        console.log(`Payment method ${paymentMethod.id} associated with user ${userId}`);

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

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('PaymentIntent was successful:', paymentIntent.id);
      // Then define and call a function to handle the 'payment_intent.succeeded' event
      handlePaymentIntentSucceeded(paymentIntent);
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      console.log('PaymentMethod was attached to a Customer:', paymentMethod.id);
      // Then define and call a function to handle the 'payment_method.attached' event
      handlePaymentMethodAttached(paymentMethod);
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 res to acknowledge receipt of the event
  res.send();
});