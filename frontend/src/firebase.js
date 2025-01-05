import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration (replace with your Firebase config values)
const firebaseConfig = {
    apiKey: "AIzaSyAA7u_hD1Yxr2rXL_SglfSBjhbsJRjXm7o",
    authDomain: "skillboard-lite.firebaseapp.com",
    projectId: "skillboard-lite",
    storageBucket: "skillboard-lite.firebasestorage.app",
    messagingSenderId: "661376488004",
    appId: "1:661376488004:web:66c6f20fbe3e62f3ba6211"
  };
// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Export Auth
export const auth = getAuth(app); 
// Export Firestore (Optional, for database use)
export const db = getFirestore(app);

export default app;