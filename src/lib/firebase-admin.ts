import * as admin from 'firebase-admin';

// This is a singleton pattern to ensure we only initialize the Firebase Admin SDK once.
// This is crucial in a serverless environment where modules might be re-initialized.

let adminDb: admin.firestore.Firestore;
let adminAuth: admin.auth.Auth;

if (!admin.apps.length) {
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountKey) {
    throw new Error(
      'CRITICAL: FIREBASE_SERVICE_ACCOUNT_KEY is not set. The Admin SDK cannot be initialized. Please check your environment variables.'
    );
  }
  try {
    const decodedKey = Buffer.from(serviceAccountKey, 'base64').toString(
      'utf8'
    );
    const serviceAccount = JSON.parse(decodedKey);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error: any) {
    throw new Error(
      `Failed to parse/decode service account key or initialize Firebase Admin SDK: ${error.message}`
    );
  }
}

adminDb = admin.firestore();
adminAuth = admin.auth();

export { adminDb, adminAuth };
