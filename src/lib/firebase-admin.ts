
import * as admin from 'firebase-admin';

let adminDb: admin.firestore.Firestore;
let adminAuth: admin.auth.Auth;

if (!admin.apps.length) {
  console.log("Initializing Firebase Admin SDK...");
  try {
    const serviceAccountString = process.env.GOOGLE_APPLICATION_CREDENTIALS;
    if (!serviceAccountString) {
      throw new Error('GOOGLE_APPLICATION_CREDENTIALS is not set.');
    }
    const serviceAccount = JSON.parse(serviceAccountString);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    
    console.log('Firebase Admin SDK initialized successfully.');
  } catch (error: any) {
    console.error(
      'CRITICAL: Failed to initialize Firebase Admin SDK.',
      { errorMessage: error.message }
    );
    // In a real-world scenario, you might want to alert or handle this more gracefully.
    // For now, we'll let it throw to prevent the app from running in a broken state.
    throw new Error('Could not initialize Firebase Admin SDK. Check server logs.');
  }
}

adminDb = admin.firestore();
adminAuth = admin.auth();

if (!adminDb || !adminAuth) {
    // This should theoretically not be reached if initializeApp succeeds.
    console.error("CRITICAL: Firebase Admin DB or Auth is not available after initialization.");
}

export { adminDb, adminAuth };
