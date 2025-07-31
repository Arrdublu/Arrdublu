
'use server';

import { redirect } from 'next/navigation';
import Stripe from 'stripe';
import { getServiceById } from '@/lib/data';
import type { Service } from '@/lib/types';
import { headers } from 'next/headers';
import { adminDb } from './firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';


type CheckoutItem = {
    id: string;
    quantity: number;
};

export async function createCheckoutSession(items: CheckoutItem[]): Promise<{ id: string, url: string | null }> {
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

  const orderItems: { itemId: string; name: string; quantity: number; price: number }[] = [];
  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  let totalAmount = 0;

  for (const item of items) {
    const service = getServiceById(item.id);
    if (!service) {
      throw new Error(`Service with ID ${item.id} not found.`);
    }

    const unitAmount = service.price * 100;
    const itemTotal = service.price * item.quantity;
    totalAmount += itemTotal;

    lineItems.push({
      price_data: {
        currency: 'usd',
        product_data: {
          name: service.name,
          description: service.description,
          images: [service.image],
        },
        unit_amount: unitAmount,
      },
      quantity: item.quantity,
    });
    
    orderItems.push({
      itemId: service.id,
      name: service.name,
      quantity: item.quantity,
      price: service.price,
    });
  }

  const discountThreshold = 200;
  const discountRate = 0.10; // 10%
  let discountedAmount = totalAmount;
  let sessionConfig: Stripe.Checkout.SessionCreateParams = {
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
  };

  if (totalAmount >= discountThreshold) {
    const discountAmount = totalAmount * discountRate;
    discountedAmount = totalAmount - discountAmount;
    
    const coupon = await stripe.coupons.create({
      percent_off: discountRate * 100,
      duration: 'once',
      name: '10% order discount',
    });
    
    sessionConfig.discounts = [{ coupon: coupon.id }];
  }

  const host = (await headers()).get('origin') || 'http://localhost:3000';
  
  const orderRef = await adminDb.collection('orders').add({
    items: orderItems,
    totalAmount: totalAmount,
    discountedAmount: discountedAmount,
    status: 'pending',
    createdAt: FieldValue.serverTimestamp(),
  });
  
  sessionConfig.success_url = `${host}/orders?session_id={CHECKOUT_SESSION_ID}`;
  sessionConfig.cancel_url = `${host}/cart`;
  sessionConfig.metadata = {
    orderId: orderRef.id,
    totalAmount: totalAmount.toString(),
    discountedAmount: discountedAmount.toString(),
  };

  const session = await stripe.checkout.sessions.create(sessionConfig);
  
  if (!session.id || !session.url) {
    throw new Error('Failed to create Stripe session');
  }

  await orderRef.update({
    stripeSessionId: session.id,
  });

  return { id: session.id, url: session.url };
}
