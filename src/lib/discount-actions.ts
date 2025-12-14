
'use server';

import { revalidatePath } from 'next/cache';
import { adminDb } from './firebase-admin';
import type { Discount } from './types';

type DiscountCreate = Omit<Discount, 'id'>;

// Admin action to create a discount
export async function createDiscount(
  discountData: DiscountCreate
): Promise<Discount> {

  // Check if discount code already exists
  const existingDiscountQuery = await adminDb
    .collection('discounts')
    .where('code', '==', discountData.code)
    .limit(1)
    .get();

  if (!existingDiscountQuery.empty) {
    throw new Error(`Discount code "${discountData.code}" already exists.`);
  }

  const docRef = await adminDb.collection('discounts').add({
    ...discountData,
    isActive: true,
  });

  revalidatePath('/admin/discounts');

  return {
    id: docRef.id,
    ...discountData,
  };
}

// Admin action to get all discounts
export async function getDiscounts(): Promise<Discount[]> {
  const snapshot = await adminDb.collection('discounts').get();
  return snapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as Discount)
  );
}

// Admin action to delete a discount
export async function deleteDiscount(id: string): Promise<void> {
    await adminDb.collection('discounts').doc(id).delete();
    revalidatePath('/admin/discounts');
}


// Client action to verify a discount code
export async function verifyDiscountCode(code: string): Promise<Discount> {
  const uppercaseCode = code.toUpperCase();
  const snapshot = await adminDb
    .collection('discounts')
    .where('code', '==', uppercaseCode)
    .where('isActive', '==', true)
    .limit(1)
    .get();

  if (snapshot.empty) {
    throw new Error('This discount code is not valid or has expired.');
  }

  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() } as Discount;
}
