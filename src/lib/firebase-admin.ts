
import * as admin from 'firebase-admin';

// This is a singleton pattern to ensure we only initialize the Firebase Admin SDK once.
let app: admin.app.App;

if (!admin.apps.length) {
  console.log("Attempting to initialize Firebase Admin SDK...");
  try {
    // The Admin SDK will automatically look for GOOGLE_APPLICATION_CREDENTIALS
    // environment variable or firebase-adminsdk-<project-id>-<hash>-admin.json file
    app = admin.initializeApp({
      databaseURL:
        'https://arrdublu-3-default-rtdb.europe-west1.firebasedatabase.app',
    });
    console.log('Firebase Admin SDK initialized successfully.');
  } catch (error: any) {
    console.error(
      'CRITICAL: Failed to initialize Firebase Admin SDK.',
      {
        errorMessage: error.message,
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
