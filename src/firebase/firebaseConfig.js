import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgmxiG8Wu8-dL-MtOrwohf2ZrGYm75s28",
  authDomain: "sdc-website-dae9b.firebaseapp.com",
  projectId: "sdc-website-dae9b",
  storageBucket: "sdc-website-dae9b.appspot.com",
  messagingSenderId: "571026022392",
  appId: "1:571026022392:web:cdc5d028e10d642e4e000d"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()