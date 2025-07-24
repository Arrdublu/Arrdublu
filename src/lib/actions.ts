
'use server';

import { redirect } from 'next/navigation';
import Stripe from 'stripe';
import { getServiceRecommendations } from '@/ai/flows/service-recommendation';
import { getServiceById, getServicesByIds } from '@/lib/data';
import type { Service, CartItem } from '@/lib/types';
import { headers } from 'next/headers';

export async function getRecommendedServicesAction(
  viewingHistory: string[],
  shoppingBagContents: string[]
): Promise<Service[]> {
  try {
    // The GenAI flow might recommend items already in the cart or viewed.
    // It's a simple model, so we'll filter them out here.
    const allInputIds = new Set([...viewingHistory, ...shoppingBagContents]);

    const recommendations = await getServiceRecommendations({
      viewingHistory,
      shoppingBagContents,
    });
    
    const filteredIds = recommendations.recommendedServices.filter(id => !allInputIds.has(id));

    if (filteredIds.length === 0) {
      return [];
    }

    // Fetch full service details for the recommended IDs
    const recommendedServices = await getServicesByIds(filteredIds);
    return recommendedServices;
  } catch (error) {
    console.error('Error getting recommendations:', error);
    // In case of an error, return an empty array to prevent crashing the client.
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
        throw new Error(`Service with id ${item.id} not found.`);
    }
    return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: service.name,
            description: service.description,
          },
          unit_amount: service.price * 100, // Stripe expects the amount in cents
        },
        quantity: item.quantity,
    }
  });
  
  const host = headers().get('origin') || 'http://localhost:3000';

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: `${host}/orders?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${host}/cart`,
  });
  
  if (!session.id) {
    throw new Error('Failed to create Stripe session');
  }

  return { id: session.id };
}
