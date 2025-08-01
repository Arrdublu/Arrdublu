import * as admin from 'firebase-admin';

let adminDb: admin.firestore.Firestore;
let adminAuth: admin.auth.Auth;

if (admin.apps.length === 0) {
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountKey) {
    console.error(
      'CRITICAL: FIREBASE_SERVICE_ACCOUNT_KEY is not set. The Admin SDK cannot be initialized. Please check your environment variables.'
    );
  } else {
    try {
      const serviceAccount = JSON.parse(serviceAccountKey);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://arrdublu-3-default-rtdb.europe-west1.firebasedatabase.app'
      });
      console.log('Firebase Admin SDK initialized successfully.');
    } catch (error: any) {
      console.error(
        'Failed to parse service account key or initialize Firebase Admin SDK. Please ensure the FIREBASE_SERVICE_ACCOUNT_KEY is a valid, single-line JSON string.',
        {
          errorMessage: error.message,
        }
      );
    }
  }
}

// Ensure db and auth are assigned, otherwise they would be undefined.
// This might still throw if initialization failed, but the error above will be more descriptive.
try {
  adminDb = admin.firestore();
  adminAuth = admin.auth();
} catch (error) {
    console.error("Could not get Firestore or Auth instances. This likely means the Admin SDK failed to initialize.", error);
    // In a real app, you might want to handle this more gracefully,
    // but for debugging, throwing here makes the problem visible.
    throw new Error("Firebase Admin SDK not initialized. Cannot continue.");
}


export { adminDb, adminAuth };
