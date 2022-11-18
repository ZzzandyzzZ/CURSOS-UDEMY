// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7yDX8Szfx2U7PZB2jJZlienBPPemXqBM",
  authDomain: "cursos-react-482e5.firebaseapp.com",
  projectId: "cursos-react-482e5",
  storageBucket: "cursos-react-482e5.appspot.com",
  messagingSenderId: "324205657893",
  appId: "1:324205657893:web:9af8b4579f4e11a207a4cc"
};
// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);