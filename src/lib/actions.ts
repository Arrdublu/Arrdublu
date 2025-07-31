
'use server';

import Stripe from 'stripe';
import { getServiceById } from '@/lib/data';
import { adminDb } from './firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';
import { verifyDiscountCode } from './discount-actions';
import type { CartItem } from './types';

export async function createPaymentIntent(
  items: CartItem[],
  discountCode?: string
): Promise<{ clientSecret: string; orderId: string }> {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
   if (!adminDb) {
    throw new Error('Firebase Admin SDK not initialized. Cannot create order.');
  }

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2024-06-20',
  });

  const orderItems = items.map(item => ({
    itemId: item.service.id,
    name: item.service.name,
    quantity: item.quantity,
    price: item.service.price,
  }));

  const subtotal = items.reduce((sum, item) => sum + item.service.price * item.quantity, 0);
  let totalAmount = subtotal;
  let discountAmount = 0;

  const orderData: any = {
    items: orderItems,
    subtotal: subtotal,
    status: 'pending',
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

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(totalAmount * 100), // Amount in cents
    currency: 'usd',
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
