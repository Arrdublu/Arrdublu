
import * as admin from 'firebase-admin';

// This is a singleton pattern to ensure we only initialize the Firebase Admin SDK once.
let app: admin.app.App;

if (!admin.apps.length) {
  console.log("Attempting to initialize Firebase Admin SDK...");
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  if (!serviceAccountKey) {
    throw new Error('CRITICAL: FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set. The Admin SDK cannot be initialized.');
  }

  try {
    // Decode the Base64 encoded service account key before parsing
    const decodedKey = Buffer.from(serviceAccountKey, 'base64').toString('utf-8');
    const parsedKey = JSON.parse(decodedKey);
    
    app = admin.initializeApp({
      credential: admin.credential.cert(parsedKey),
      databaseURL:
        'https://arrdublu-3-default-rtdb.europe-west1.firebasedatabase.app',
    });
    console.log('Firebase Admin SDK initialized successfully.');
  } catch (error: any) {
    console.error(
      'CRITICAL: Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY or initialize Firebase Admin SDK.',
      {
        errorMessage: error.message,
        // Only log a snippet for security reasons
        keySnippet: serviceAccountKey.substring(0, 40) + '...', 
      }
    );
    // Throw a more specific error to prevent the application from running with a misconfigured SDK.
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
