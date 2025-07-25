
'use server';

import { redirect } from 'next/navigation';
import Stripe from 'stripe';
import { getServiceById } from '@/lib/data';
import type { Service } from '@/lib/types';
import { headers } from 'next/headers';
import { adminDb } from './firebase-admin';
import { serverTimestamp } from 'firebase/firestore';


type CheckoutItem = {
    id: string;
    quantity: number;
};

export async function createCheckoutSession(items: CheckoutItem[]): Promise<{ id: string }> {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
  
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
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

    // For Stripe line items
    lineItems.push({
      price_data: {
        currency: 'usd',
        product_data: {
          name: service.name,
          description: service.description,
          images: [service.image],
        },
        unit_amount: service.price * 100,
      },
      quantity: item.quantity,
    });

    // For Firestore order document
    orderItems.push({
      itemId: service.id,
      name: service.name,
      quantity: item.quantity,
      price: service.price,
    });

    totalAmount += service.price * item.quantity;
  }

  const host = headers().get('origin') || 'http://localhost:3000';
  
  // Create an order document in Firestore using the Admin SDK
  const orderRef = await adminDb.collection('orders').add({
    items: orderItems,
    totalAmount: totalAmount,
    status: 'pending',
    createdAt: serverTimestamp(),
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: `${host}/orders?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${host}/cart`,
    metadata: {
      orderId: orderRef.id,
    }
  });
  
  if (!session.id) {
    throw new Error('Failed to create Stripe session');
  }

  return { id: session.id };
}

