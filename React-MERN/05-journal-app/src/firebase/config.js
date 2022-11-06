// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB06IFJf6hEve3KF2w1-FcaV1UoyB6gYKQ",
  authDomain: "cursos-react-d91a5.firebaseapp.com",
  projectId: "cursos-react-d91a5",
  storageBucket: "cursos-react-d91a5.appspot.com",
  messagingSenderId: "634817040358",
  appId: "1:634817040358:web:2475a9ce166f62e19bd027"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);