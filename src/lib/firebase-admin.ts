import * as admin from 'firebase-admin';

let adminDb: admin.firestore.Firestore;
let adminAuth: admin.auth.Auth;

/**
 * Initializes the Firebase Admin SDK if it hasn't been already.
 * Ensures that the service account key is available and valid.
 * @returns The initialized Firebase app.
 */
function initializeAdminApp() {
  // If an app is already initialized, return it.
  if (admin.apps.length > 0) {
    return admin.app();
  }

  // Check for the service account key in environment variables.
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountKey) {
    throw new Error(
      'FIREBASE_SERVICE_ACCOUNT_KEY is not set in environment variables. Firebase Admin SDK cannot be initialized.'
    );
  }

  try {
    // Decode the Base64 encoded service account key and parse it as JSON.
    const decodedKey = Buffer.from(serviceAccountKey, 'base64').toString('utf8');
    const serviceAccount = JSON.parse(decodedKey);
    return admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error: any) {
    throw new Error(
      `Failed to parse/decode service account key or initialize Firebase Admin SDK: ${error.message}`
    );
  }
}

try {
  // Initialize the app and get the services.
  const app = initializeAdminApp();
  adminDb = admin.firestore(app);
  adminAuth = admin.auth(app);
} catch (error) {
  console.error('CRITICAL: Firebase Admin SDK initialization failed.', error);
  // The error is thrown, so the app will crash, preventing further issues.
  // The console log above will provide the necessary details for debugging.
  // In a real app, you might handle this more gracefully, but for now,
  // making the error visible is the priority.
  throw error;
}

export { adminDb, adminAuth };
