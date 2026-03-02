// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdJ2oXfEnwz1kWsXxlMx4WskOI1GbYh8Y",
  authDomain: "netflixgpt-44b0f.firebaseapp.com",
  projectId: "netflixgpt-44b0f",
  storageBucket: "netflixgpt-44b0f.firebasestorage.app",
  messagingSenderId: "1047673322795",
  appId: "1:1047673322795:web:b1e31a214d62f2fe4ad96e",
  measurementId: "G-KJLL8Y4FVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);