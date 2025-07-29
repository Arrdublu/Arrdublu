import * as admin from 'firebase-admin';

let adminDb: admin.firestore.Firestore | null = null;
let adminAuth: admin.auth.Auth | null = null;

function initializeFirebaseAdmin() {
  if (admin.apps.length === 0) {
    const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

    if (serviceAccountKey) {
      try {
        const serviceAccount = JSON.parse(serviceAccountKey);

        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
        });

        adminDb = admin.firestore();
        adminAuth = admin.auth();
        console.log('Firebase Admin SDK initialized successfully.');
      } catch (error: any) {
        console.error('Error initializing Firebase Admin SDK:', error.message);
      }
    } else {
      console.warn('FIREBASE_SERVICE_ACCOUNT_KEY is not set. Firebase Admin SDK not initialized.');
    }
  } else {
    adminDb = admin.firestore();
    adminAuth = admin.auth();
  }
  return { adminDb, adminAuth };
}

export { initializeFirebaseAdmin, adminDb, adminAuth };
