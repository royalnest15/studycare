// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";
import firebase from "firebase/compat/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLJ1b4IK-I0SkcOPQx_kfLgMGV1AZo3AU",
  authDomain: "studycare-aff3d.firebaseapp.com",
  databaseURL: "https://studycare-aff3d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "studycare-aff3d",
  storageBucket: "studycare-aff3d.firebasestorage.app",
  messagingSenderId: "1083723260037",
  appId: "1:1083723260037:web:639a81297a0020bd0709ec",
  measurementId: "G-BKVV8D5RTP"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);
const sdb = getFirestore(app);
const imgDb = getStorage(app);
const provider = new GoogleAuthProvider();
  
  

export {db, imgDb, auth, provider, sdb, analytics};
