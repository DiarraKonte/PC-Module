// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCt1KYhZRKF57aoGpdAIIYemmgV-DACVSE",
  authDomain: "pc-business-6b625.firebaseapp.com",
  projectId: "pc-business-6b625",
  storageBucket: "pc-business-6b625.firebaseapp.com", // corrige ici aussi le storageBucket
  messagingSenderId: "281798436406",
  appId: "1:281798436406:web:c8c171af598c6c259ada97"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); // ← Firestore ajouté ici
