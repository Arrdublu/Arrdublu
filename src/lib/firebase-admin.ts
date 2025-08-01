
import * as admin from 'firebase-admin';

// This is a singleton pattern to ensure we only initialize the Firebase Admin SDK once.
// This is crucial in a serverless environment where modules might be re-initialized.

let adminDb: admin.firestore.Firestore;
let adminAuth: admin.auth.Auth;

if (admin.apps.length === 0) {
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountKey) {
    throw new Error(
      'CRITICAL: FIREBASE_SERVICE_ACCOUNT_KEY is not set. The Admin SDK cannot be initialized. Please check your environment variables.'
    );
  }
  
  try {
    // Robust, two-step parsing to handle escaped characters and ensure valid JSON
    const decodedKey = JSON.parse(serviceAccountKey);

    admin.initializeApp({
      credential: admin.credential.cert(decodedKey),
      databaseURL: `https://${decodedKey.project_id}-default-rtdb.firebaseio.com`
    });

  } catch (error: any) {
    console.error("Failed to parse service account key. Raw key (check for extra escaping or formatting issues):", serviceAccountKey);
    throw new Error(
      `Failed to parse/decode service account key or initialize Firebase Admin SDK: ${error.message}`
    );
  }
}

adminDb = admin.firestore();
adminAuth = admin.auth();

export { adminDb, adminAuth };
