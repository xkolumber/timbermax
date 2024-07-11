// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6McDOMucKAj797rsU8hi7VZvbfRQPN0w",
  authDomain: "timbermax.firebaseapp.com",
  projectId: "timbermax",
  storageBucket: "timbermax.appspot.com",
  messagingSenderId: "669724418891",
  appId: "1:669724418891:web:ee438fd80d1f2b96237ece",
  measurementId: "G-Z0BLT20F95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };