
'use server';

import { redirect } from 'next/navigation';
import Stripe from 'stripe';
import { getServiceRecommendations } from '@/ai/flows/service-recommendation';
import { getServicesByIds, getServiceById } from '@/lib/data';
import type { Service } from '@/lib/types';
import { headers } from 'next/headers';
import { adminDb } from './firebase-admin';
import { firestore } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';


export async function getRecommendedServicesAction(
  viewingHistory: string[],
  shoppingBagContents: string[]
): Promise<Service[]> {
  try {
    const allInputIds = new Set([...viewingHistory, ...shoppingBagContents]);

    const recommendations = await getServiceRecommendations({
      viewingHistory,
      shoppingBagContents,
    });
    
    const filteredIds = recommendations.recommendedServices.filter(id => !allInputIds.has(id));

    if (filteredIds.length === 0) {
      return [];
    }

    const recommendedServices = await getServicesByIds(filteredIds);
    return recommendedServices;
  } catch (error) {
    console.error('Error getting recommendations:', error);
    return [];
  }
}

type CheckoutItem = {
    id: string;
    quantity: number;
    name: string;
    price: number;
    description: string;
};

export async function createCheckoutSession(items: CheckoutItem[]): Promise<{ id: string }> {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
  
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-06-20',
  });

  const lineItems = items.map(item => {
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          description: item.description,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }
  });

  const host = headers().get('origin') || 'http://localhost:9002';
  
  // Create an order document in Firestore
  const orderRef = await addDoc(collection(firestore, 'orders'), {
    items: items.map(item => ({
      itemId: item.id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    })),
    totalAmount: items.reduce((total, item) => total + item.price * item.quantity, 0),
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
