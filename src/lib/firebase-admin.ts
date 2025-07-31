import * as admin from 'firebase-admin';

interface AdminApp {
  db: admin.firestore.Firestore;
  auth: admin.auth.Auth;
}

function initializeAdminApp(): AdminApp {
  if (admin.apps.length > 0) {
    const app = admin.app();
    return {
      db: admin.firestore(app),
      auth: admin.auth(app),
    };
  }

  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  if (!serviceAccountKey) {
    throw new Error(
      'CRITICAL: FIREBASE_SERVICE_ACCOUNT_KEY is not set. The Admin SDK cannot be initialized.'
    );
  }

  try {
    const decodedKey = Buffer.from(serviceAccountKey, 'base64').toString('utf8');
    const serviceAccount = JSON.parse(decodedKey);

    const app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    return {
      db: admin.firestore(app),
      auth: admin.auth(app),
    };
  } catch (error: any) {
    console.error('Failed to parse/decode service account key or initialize Firebase Admin SDK:', error);
    throw new Error(
      `Failed to parse/decode service account key or initialize Firebase Admin SDK: ${error.message}`
    );
  }
}

const { db: adminDb, auth: adminAuth } = initializeAdminApp();

export { adminDb, adminAuth };