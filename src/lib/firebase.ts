// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  projectId: "arrdublu-yur7j",
  appId: "1:661883279745:web:0740f986e7070b85f6f080",
  storageBucket: "arrdublu-yur7j.firebasestorage.app",
  apiKey: "AIzaSyAsMyiK2r5v_iAJaof_9AaDsdBkr9tZkDA",
  authDomain: "arrdublu-yur7j.firebaseapp.com",
  messagingSenderId: "661883279745"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };
