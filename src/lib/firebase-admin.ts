import * as admin from 'firebase-admin';

let adminDb: admin.firestore.Firestore;
let adminAuth: admin.auth.Auth;

function initializeAdminApp() {
  if (admin.apps.length > 0) {
    const app = admin.app();
    adminDb = admin.firestore(app);
    adminAuth = admin.auth(app);
    return;
  }

  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  if (!serviceAccountKey) {
    throw new Error(
      'CRITICAL: FIREBASE_SERVICE_ACCOUNT_KEY is not set in environment variables. The Admin SDK cannot be initialized. Please check your hosting configuration.'
    );
  }

  try {
    // Decode and parse the service account key
    const decodedKey = Buffer.from(serviceAccountKey, 'base64').toString('utf8');
    const serviceAccount = JSON.parse(decodedKey);

    // Initialize the app
    const app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    adminDb = admin.firestore(app);
    adminAuth = admin.auth(app);
  } catch (error: any) {
    console.error('Failed to parse/decode service account key or initialize Firebase Admin SDK:', error);
    throw new Error(
      `Failed to parse/decode service account key or initialize Firebase Admin SDK: ${error.message}`
    );
  }
}

// Initialize the app on module load
initializeAdminApp();


export { adminDb, adminAuth };
