
import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getAuth, type Auth } from 'firebase/auth';

const firebaseConfig = {
  projectId: "arrdublu-yur7j",
  appId: "1:661883279745:web:0740f986e7070b85f6f080",
  storageBucket: "arrdublu-yur7j.firebasestorage.app",
  apiKey: "AIzaSyAsMyiK2r5v_iAJaof_9AaDsdBkr9tZkDA",
  authDomain: "arrdublu-yur7j.firebaseapp.com",
  messagingSenderId: "661883279745"
};

let app: FirebaseApp;
let firestore: Firestore | null = null;
let auth: Auth;

if (typeof window !== 'undefined') {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    firestore = getFirestore(app);
    auth = getAuth(app);
} else {
    // In a server-side context, you might not want to initialize the client SDK
    // or you might want to use the Admin SDK instead.
    // For this app, client-side firebase is all we need for this file.
}

export { app, firestore, auth };
