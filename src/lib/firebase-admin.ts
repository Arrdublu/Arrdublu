import * as admin from 'firebase-admin';

let adminApp: admin.app.App;

if (!admin.apps.length) {
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountKey) {
    console.error(
      'CRITICAL: FIREBASE_SERVICE_ACCOUNT_KEY is not set. The Admin SDK cannot be initialized.'
    );
    // In a real app, you might want to throw here, but to prevent crashing the server
    // during development if the key is momentarily unavailable, we'll log a severe error.
  } else {
    try {
      const decodedKey = Buffer.from(serviceAccountKey, 'base64').toString('utf8');
      const serviceAccount = JSON.parse(decodedKey);

      adminApp = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    } catch (error: any) {
      console.error(
        'Failed to parse/decode service account key or initialize Firebase Admin SDK:',
        error
      );
    }
  }
} else {
  adminApp = admin.app();
}

const adminDb = adminApp!?.firestore();
const adminAuth = adminApp!?.auth();

export { adminDb, adminAuth };
