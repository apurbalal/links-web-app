// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGbaNQkUJOsBoB1vFFTrPpK7bVBOct9-w",
  authDomain: "link-web-app-a00d5.firebaseapp.com",
  projectId: "link-web-app-a00d5",
  storageBucket: "link-web-app-a00d5.appspot.com",
  messagingSenderId: "907932794873",
  appId: "1:907932794873:web:ec968bfd360842db6bc728",
  measurementId: "G-42FTKNEL78",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const functions = getFunctions(app);
