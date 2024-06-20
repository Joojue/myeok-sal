// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL9FswlNcRTbL9xEY6j90gLe7_fKrCVLk",
  authDomain: "godagym-6ba83.firebaseapp.com",
  projectId: "godagym-6ba83",
  storageBucket: "godagym-6ba83.appspot.com",
  messagingSenderId: "758511581",
  appId: "1:758511581:web:46096b29a5c6cce571a834",
  measurementId: "G-DJME8FDBWQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // for 인증
export const storage = getStorage(app); // for 스토리지
export const db = getFirestore(app); // for 데이터베이스
