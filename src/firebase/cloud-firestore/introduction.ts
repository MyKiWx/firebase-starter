import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
// export declare function initializeApp(options: FirebaseOptions, name?: string): FirebaseApp;
// export declare function initializeApp(options: FirebaseOptions, config?: FirebaseAppSettings): FirebaseApp;
// export declare function initializeApp(): FirebaseApp;
const app = initializeApp(firebaseConfig);

// Initialize CLoud Firestore and get a reference to the service
// export declare function getFirestore(): Firestore;
// export declare function getFirestore(app: FirebaseApp): Firestore;
// export declare function getFirestore(databaseId: string): Firestore;
// export declare function getFirestore(app: FirebaseApp, databaseId: string): Firestore;
const db = getFirestore(app);
