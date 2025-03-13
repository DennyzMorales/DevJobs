// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAYNlWeQV1FnG0DyJp5oe6CF-JNYnCsVIg",
    authDomain: "devj-555dd.firebaseapp.com",
    projectId: "devj-555dd",
    storageBucket: "devj-555dd.firebasestorage.app",
    messagingSenderId: "510156588414",
    appId: "1:510156588414:web:365be238a6f944ab365f2f"
  };  

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // 🔥 Agrega Firestore
