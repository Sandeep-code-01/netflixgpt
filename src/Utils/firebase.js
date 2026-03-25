// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6wS4mLELkDKEN4m46m4xfxBDjDMCSJHk",
  authDomain: "netflixgpt-8b54b.firebaseapp.com",
  projectId: "netflixgpt-8b54b",
  storageBucket: "netflixgpt-8b54b.firebasestorage.app",
  messagingSenderId: "208225763224",
  appId: "1:208225763224:web:0f3408b5575915720275ed",
  measurementId: "G-MCFKXGWS0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);