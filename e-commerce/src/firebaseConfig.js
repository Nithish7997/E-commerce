// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
//
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn1kbvv3POncXa-0XfGAlSrXSKwUy3u_0",
  authDomain: "e-commerce-17a38.firebaseapp.com",
  projectId: "e-commerce-17a38",
  storageBucket: "e-commerce-17a38.appspot.com",
  messagingSenderId: "728974093218",
  appId: "1:728974093218:web:236c8034843fd09f19e0fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
