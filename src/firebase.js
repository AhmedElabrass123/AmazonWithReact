// import firebase from "./firebase"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig  ={
    apiKey: "AIzaSyCYmiR8bJf4X4cA2PBwZ5mkCL0EODSuHn8",
    authDomain: "clone-46e64.firebaseapp.com",
    projectId: "clone-46e64",
    storageBucket: "clone-46e64.appspot.com",
    messagingSenderId: "838332492515",
    appId: "1:838332492515:web:d7df785ac054f559f973d6",
    measurementId: "G-84SZYWY90Z"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app