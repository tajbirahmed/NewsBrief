import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { apiKey, appId, authDomain, measurementId, messagingSenderId, projectId, storageBucket } from "./SecretKeys/FireBaseSetup";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId 
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const DB = getFirestore(FIREBASE_APP);