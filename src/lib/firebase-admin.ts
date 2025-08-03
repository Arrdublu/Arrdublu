
import * as admin from 'firebase-admin';

let app: admin.app.App;

if (!admin.apps.length) {
  console.log("Attempting to initialize Firebase Admin SDK...");
  try {
    const serviceAccountString = process.env.GOOGLE_APPLICATION_CREDENTIALS;
    if (!serviceAccountString) {
      throw new Error(
        'GOOGLE_APPLICATION_CREDENTIALS environment variable is not set.'
      );
    }
    const serviceAccount = JSON.parse(serviceAccountString);

    app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    console.log('Firebase Admin SDK initialized successfully.');
  } catch (error: any) {
    console.error( 
      'CRITICAL: Failed to initialize Firebase Admin SDK.',
      {
        errorMessage: error.message,
      }
    );
    throw new Error('Could not initialize Firebase Admin SDK. Please check the service account key and server logs.');
  }
} else {
  app = admin.app();
  console.log('Re-using existing Firebase Admin SDK instance.');
}

const adminDb = app ? admin.firestore() : undefined;
const adminAuth = app ? admin.auth() : undefined;

if (!adminDb || !adminAuth) {
    console.error("Firebase Admin DB or Auth is not available. This will cause issues with Firestore and Auth operations.");
}


export { adminDb, adminAuth };
