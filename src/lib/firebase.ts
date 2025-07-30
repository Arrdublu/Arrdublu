
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

const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
const firestore: Firestore = getFirestore(app);
const auth: Auth = getAuth(app);

export { app, firestore, auth };
