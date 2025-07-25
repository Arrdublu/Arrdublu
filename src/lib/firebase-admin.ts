import * as admin from 'firebase-admin';

let adminDb: admin.firestore.Firestore | null = null;
let adminAuth: admin.auth.Auth | null = null;

if (!admin.apps.length) {
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  if (serviceAccountKey) {
    try {
      // The key might be a stringified JSON. If so, parse it.
      const serviceAccount = typeof serviceAccountKey === 'string' 
        ? JSON.parse(serviceAccountKey) 
        : serviceAccountKey;

      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      
      adminDb = admin.firestore();
      adminAuth = admin.auth();
      console.log('Firebase Admin SDK initialized successfully.');

    } catch (error: any) {
      console.error('Error initializing Firebase Admin SDK:', error.message);
      // Log the key (partially) for debugging, but be careful with secrets in logs
      console.error('Service Account Key (first 50 chars):', serviceAccountKey.substring(0, 50));
    }
  } else {
    console.warn('FIREBASE_SERVICE_ACCOUNT_KEY is not set. Firebase Admin SDK not initialized.');
  }
} else {
  // If already initialized, just get the instances.
  adminDb = admin.firestore();
  adminAuth = admin.auth();
}

export { adminDb, adminAuth };
