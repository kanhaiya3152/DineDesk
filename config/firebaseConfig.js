// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV-ZIyMDf94Uje3N2PK2uS7CsS5aoaHPU",
  authDomain: "dinedesk-9a8b0.firebaseapp.com",
  projectId: "dinedesk-9a8b0",
  storageBucket: "dinedesk-9a8b0.firebasestorage.app",
  messagingSenderId: "194823844292",
  appId: "1:194823844292:web:9bc1a8b793a3c7a4c0b491",
  measurementId: "G-59HYVS9HZ5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);