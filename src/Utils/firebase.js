// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaSS-Ou1utegGPKeEnhk75qo_5wD-vNLw",
  authDomain: "netflixgpt-964a2.firebaseapp.com",
  projectId: "netflixgpt-964a2",
  storageBucket: "netflixgpt-964a2.firebasestorage.app",
  messagingSenderId: "163531596528",
  appId: "1:163531596528:web:dcf328fa82e741603b9835",
  measurementId: "G-P840SH4NC0"
};
console.log("API KEY:", firebaseConfig.apiKey);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Auth
export const auth = getAuth(app);  // ✅ pass app here

