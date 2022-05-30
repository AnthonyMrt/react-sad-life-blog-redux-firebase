// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-vdm.firebaseapp.com",
  projectId: "react-vdm",
  storageBucket: "react-vdm.appspot.com",
  messagingSenderId: "33487101176",
  appId: "1:33487101176:web:1e6d975943f408674daf0d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore();
export default app;
