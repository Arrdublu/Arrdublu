
'use server';

import { redirect } from 'next/navigation';
import Stripe from 'stripe';
import { getServiceById } from '@/lib/data';
import type { Service } from '@/lib/types';
import { headers } from 'next/headers';
import { adminDb } from './firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';
import { verifyDiscountCode } from './discount-actions';

type CheckoutItem = {
  id: string;
  quantity: number;
};

export async function createCheckoutSession(
  items: CheckoutItem[],
  discountCode?: string
): Promise<{ id: string; url: string | null }> {
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

  const orderItems: {
    itemId: string;
    name: string;
    quantity: number;
    price: number;
  }[] = [];
  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  let subtotal = 0;

  for (const item of items) {
    const service = getServiceById(item.id);
    if (!service) {
      throw new Error(`Service with ID ${item.id} not found.`);
    }

    subtotal += service.price * item.quantity;

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

    orderItems.push({
      itemId: service.id,
      name: service.name,
      quantity: item.quantity,
      price: service.price,
    });
  }

  const host = headers().get('origin') || 'http://localhost:3000';

  const sessionConfig: Stripe.Checkout.SessionCreateParams = {
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: `${host}/orders?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${host}/cart`,
  };
  
  const orderData: any = {
    items: orderItems,
    subtotal: subtotal,
    totalAmount: subtotal, // Start with subtotal, will be adjusted if discount applies
    status: 'pending',
    createdAt: FieldValue.serverTimestamp(),
  };

  if (discountCode) {
    try {
      const discount = await verifyDiscountCode(discountCode);
      const couponOptions: Stripe.CouponCreateParams = {
        name: discount.code,
        duration: 'once',
      };
      
      let discountAmount = 0;

      if (discount.type === 'percentage') {
        couponOptions.percent_off = discount.value;
        discountAmount = subtotal * (discount.value / 100);
      } else {
        couponOptions.amount_off = discount.value * 100;
        couponOptions.currency = 'usd';
        discountAmount = discount.value;
      }
      
      const coupon = await stripe.coupons.create(couponOptions);
      sessionConfig.discounts = [{ coupon: coupon.id }];
      
      // Update order data with discount info
      orderData.discountCode = discount.code;
      orderData.discountAmount = discountAmount;
      orderData.totalAmount = Math.max(0, subtotal - discountAmount);

    } catch (error) {
      // If discount is invalid, just proceed without it.
      // The client-side should have already caught this, but this is a safeguard.
      console.warn(`Invalid discount code "${discountCode}" provided during checkout creation. Proceeding without discount.`);
    }
  }

  const orderRef = await adminDb.collection('orders').add(orderData);
  
  sessionConfig.metadata = {
    orderId: orderRef.id,
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
