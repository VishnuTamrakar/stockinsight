// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3dgoxwHkuG-tzMCBh5pEMpUFLzbCUSBk",
  authDomain: "stock-insights-a1ef2.firebaseapp.com",
  projectId: "stock-insights-a1ef2",
  storageBucket: "stock-insights-a1ef2.appspot.com",
  messagingSenderId: "378484737926",
  appId: "1:378484737926:web:2c3a0bb8d20277680ece07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)