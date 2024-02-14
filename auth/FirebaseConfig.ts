// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8ZHOJNvextWbXEsCLAw91Hn8ecQUrx-g",
  authDomain: "newsbiref.firebaseapp.com",
  projectId: "newsbiref",
  storageBucket: "newsbiref.appspot.com",
  messagingSenderId: "262325174661",
  appId: "1:262325174661:web:b880bf6fb04b18b5fec4ec",
  measurementId: "G-0DDVP90XVS"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);