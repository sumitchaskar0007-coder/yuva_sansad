import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // Keep environment overrides for deployments, but use the project's checked-in
  // Firebase web configuration when a local .env file has not been created.
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyDZ_6IFAyAmzp3VABl75eH0GgL1SmuGrGk',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'jadhavarmba-8571e.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'jadhavarmba-8571e',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'jadhavarmba-8571e.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '866458926948',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:866458926948:web:f76c58fa7b21fc690b8471',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || undefined,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const authApi = {
  onAuthStateChanged,
  signIn: (email, password) => signInWithEmailAndPassword(auth, email, password),
  signOut: () => signOut(auth),
};

export const dbApi = {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  serverTimestamp,
  db,
};
