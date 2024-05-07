// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwesYNIOWZ6BGkH4d2Jm0RYUJQFTZY4bI",
  authDomain: "fir-starter-8436c.firebaseapp.com",
  projectId: "fir-starter-8436c",
  storageBucket: "fir-starter-8436c.appspot.com",
  messagingSenderId: "163646848575",
  appId: "1:163646848575:web:e0dd75b3cf8bb2b06a828a",
  measurementId: "G-DWMW4G2SCG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
