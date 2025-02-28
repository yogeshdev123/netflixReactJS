// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHRPzL21n03PUmJ0VnYwBSriTuMbg3Qj8",
  authDomain: "react-netflix-3ed64.firebaseapp.com",
  projectId: "react-netflix-3ed64",
  storageBucket: "react-netflix-3ed64.firebasestorage.app",
  messagingSenderId: "24789000211",
  appId: "1:24789000211:web:696ef09510d486b4751fe6",
  measurementId: "G-0L3G1LF19X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export{auth};