import * as admin from 'firebase-admin';

let adminDb: admin.firestore.Firestore;
let adminAuth: admin.auth.Auth;

function initializeAdminApp() {
    if (admin.apps.length > 0) {
        console.log("Firebase Admin SDK already initialized.");
        return admin.apps[0];
    }
    
    const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
    if (!serviceAccountKey) {
        throw new Error('CRITICAL: FIREBASE_SERVICE_ACCOUNT_KEY is not set. The Admin SDK cannot be initialized.');
    }
    
    try {
        // The key might be base64 encoded or have escaped newlines.
        // Parsing it as a JSON string first handles un-escaping.
        const parsedKey = JSON.parse(serviceAccountKey);
        
        const credential = admin.credential.cert(parsedKey);
        
        console.log("Initializing Firebase Admin SDK...");
        return admin.initializeApp({
            credential,
            databaseURL: 'https://arrdublu-3-default-rtdb.europe-west1.firebasedatabase.app'
        });
    } catch (error: any) {
        console.error('Failed to parse service account key or initialize Firebase Admin SDK.', {
            errorMessage: error.message,
            // Log a snippet of the key to help debug without exposing sensitive parts.
            keySnippet: serviceAccountKey.substring(0, 40) + "..."
        });
        throw new Error('Could not initialize Firebase Admin SDK. Please check the service account key.');
    }
}

try {
    initializeAdminApp();
    adminDb = admin.firestore();
    adminAuth = admin.auth();
} catch(error) {
    // The error is already logged in initializeAdminApp, but we can log a friendlier message here.
    console.error("Firebase Admin SDK setup failed. Server-side Firebase services will not be available.");
    // To prevent the app from crashing in a state where db/auth are undefined, 
    // we throw to make it clear that the initialization failed.
    throw new Error("Firebase Admin SDK not initialized. Cannot continue.");
}

export { adminDb, adminAuth };
