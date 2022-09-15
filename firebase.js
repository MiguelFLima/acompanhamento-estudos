import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAMo-v1Vr7VLTEj41_IOstA_KS0NTA7Fes",
  authDomain: "follow-up-e1464.firebaseapp.com",
  projectId: "follow-up-e1464",
  storageBucket: "follow-up-e1464.appspot.com",
  messagingSenderId: "396809694960",
  appId: "1:396809694960:web:11967694bdf419ffae9c35"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};
export const auth = getAuth(app);