
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
};

export async function createCheckoutSession(items: CheckoutItem[]): Promise<{ id: string }> {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
  
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-06-20',
  });

  const lineItems = items.map(item => {
    const service = getServiceById(item.id);
    if (!service) {
      throw new Error(`Service with ID ${item.id} not found.`);
    }
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: service.name,
          description: service.description,
        },
        unit_amount: service.price * 100,
      },
      quantity: item.quantity,
    }
  });

  const orderItems = items.map(item => {
      const service = getServiceById(item.id)!;
      return {
          itemId: service.id,
          name: service.name,
          quantity: item.quantity,
          price: service.price
      };
  });

  const totalAmount = orderItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const host = headers().get('origin') || 'http://localhost:9002';
  
  // Create an order document in Firestore
  const orderRef = await addDoc(collection(firestore, 'orders'), {
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
