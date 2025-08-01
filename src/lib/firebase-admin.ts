import * as admin from 'firebase-admin';

let app: admin.app.App;

if (!admin.apps.length) {
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  if (!serviceAccountKey) {
    console.error(
      'CRITICAL: FIREBASE_SERVICE_ACCOUNT_KEY is not set. The Admin SDK cannot be initialized.'
    );
  } else {
    try {
      const cleanedKey = serviceAccountKey.replace(/\\n/g, '\n');
      const parsedKey = JSON.parse(cleanedKey);

      app = admin.initializeApp({
        credential: admin.credential.cert(parsedKey),
        databaseURL:
          'https://arrdublu-3-default-rtdb.europe-west1.firebasedatabase.app',
      });
      console.log('Firebase Admin SDK initialized successfully.');
    } catch (error: any) {
      console.error(
        'Failed to parse service account key or initialize Firebase Admin SDK.',
        {
          errorMessage: error.message,
          keySnippet: serviceAccountKey.substring(0, 40) + '...',
        }
      );
    }
  }
} else {
  app = admin.app();
  console.log('Firebase Admin SDK already initialized.');
}

const adminDb = app! ? admin.firestore(app) : undefined;
const adminAuth = app! ? admin.auth(app) : undefined;

if (!adminDb || !adminAuth) {
    console.error("Firebase Admin DB or Auth is not available. This will cause issues with Firestore and Auth operations.");
}


export { adminDb, adminAuth };
