
'use server';

import Stripe from 'stripe';
import { adminDb } from './firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';
import { verifyDiscountCode } from './discount-actions';
import type { Currency, Service } from './types';

export async function createPaymentIntent(
  items: {service: Service, quantity: number}[],
  currency: Currency,
  discountCode?: string
): Promise<{ clientSecret: string; orderId: string }> {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2024-06-20',
  });

  const orderItems = items.map(item => ({
    itemId: item.service.id,
    name: item.service.name,
    quantity: item.quantity,
    price: item.service.price, // Price is always stored in USD
  }));

  const subtotal = items.reduce((sum, item) => sum + item.service.price * item.quantity, 0);
  let totalAmount = subtotal; // This is in USD
  let discountAmount = 0;

  const orderData: any = {
    items: orderItems,
    subtotal: subtotal,
    status: 'pending',
    currency: currency,
    createdAt: FieldValue.serverTimestamp(),
  };

  if (discountCode) {
    try {
      const discount = await verifyDiscountCode(discountCode);
      if (discount.type === 'percentage') {
        discountAmount = subtotal * (discount.value / 100);
      } else {
        discountAmount = discount.value;
      }
      totalAmount = Math.max(0, subtotal - discountAmount);
      
      orderData.discountCode = discount.code;
      orderData.discountAmount = discountAmount;

    } catch (error) {
      console.warn(`Invalid discount code "${discountCode}" provided during checkout. Proceeding without discount.`);
    }
  }
  
  orderData.totalAmount = totalAmount;

  // Create a pending order document in Firestore first.
  // The webhook will update its status to 'paid' upon successful payment.
  const orderRef = await adminDb.collection('orders').add(orderData);
  
  // Note: Stripe requires the amount in the lowest denomination (cents for USD).
  // The amount sent to Stripe is always based on the USD totalAmount.
  // The `currency` parameter in paymentIntent is for display and processing.
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(totalAmount * 100), // Amount in cents, based on USD
    currency: currency.toLowerCase(), // Stripe expects lowercase currency codes
    receipt_email: 'customer@example.com', // Placeholder, Stripe will use the email from the payment form if available
    metadata: {
      orderId: orderRef.id,
    },
  });

  if (!paymentIntent.client_secret) {
    throw new Error('Failed to create Payment Intent.');
  }
  
  // Link the PaymentIntent ID to the order
  await orderRef.update({ stripePaymentIntentId: paymentIntent.id });

  return { clientSecret: paymentIntent.client_secret, orderId: orderRef.id };
}
