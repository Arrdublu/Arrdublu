
import * as admin from 'firebase-admin';
import { firebaseConfig } from './firebase';

let adminDb: admin.firestore.Firestore | null = null;
let adminAuth: admin.auth.Auth | null = null;

if (!admin.apps.length) {
  console.log('Attempting to initialize Firebase Admin SDK...');
  try {
    // In a deployed Firebase environment (like App Hosting or Cloud Functions),
    // the SDK can auto-discover credentials. We just need the project ID.
    admin.initializeApp({
      projectId: firebaseConfig.projectId,
    });
    console.log('Firebase Admin SDK initialized successfully.');
    adminDb = admin.firestore();
    adminAuth = admin.auth();
  } catch (error: any) {
    console.error(
      'CRITICAL: Failed to initialize Firebase Admin SDK.',
      'This might happen in a local environment without credentials.',
      `Error: ${error.message}`
    );
    // Do not throw an error. The app can continue to run,
    // but backend features requiring admin access will fail.
    // The parts of the code using adminDb/adminAuth should handle them being null.
  }
} else {
  // If the app is already initialized, just get the instances.
  adminDb = admin.firestore();
  adminAuth = admin.auth();
}

export { adminDb, adminAuth };
