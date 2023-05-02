// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGT47R0anwpcNrKqwk8ZGSNcuGD4yxSKU",
  authDomain: "ema-john-with-firebase-a-e0fc9.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-e0fc9",
  storageBucket: "ema-john-with-firebase-a-e0fc9.appspot.com",
  messagingSenderId: "500603054210",
  appId: "1:500603054210:web:457a4c7e8c937531bf2c9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;