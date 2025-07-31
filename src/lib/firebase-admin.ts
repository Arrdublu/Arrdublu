import * as admin from 'firebase-admin';

let adminDb: admin.firestore.Firestore;
let adminAuth: admin.auth.Auth;

// This is a more robust way to initialize the admin SDK in a Next.js environment.
// It ensures that we don't try to re-initialize the app on every hot-reload.
if (!admin.apps.length) {
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  if (!serviceAccountKey) {
    // This will throw a clear error if the key is missing.
    throw new Error(
      'CRITICAL: FIREBASE_SERVICE_ACCOUNT_KEY is not set in environment variables. The Admin SDK cannot be initialized. Please check your hosting configuration.'
    );
  }

  try {
    const serviceAccount = JSON.parse(
      Buffer.from(serviceAccountKey, 'base64').toString('utf8')
    );
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error: any) {
    // This will catch any parsing errors.
    console.error('Failed to parse service account key:', error);
    throw new Error(
      `Failed to parse/decode service account key or initialize Firebase Admin SDK: ${error.message}`
    );
  }
}

// Get the initialized instances of Firestore and Auth.
const app = admin.app();
adminDb = admin.firestore(app);
adminAuth = admin.auth(app);

export { adminDb, adminAuth };
