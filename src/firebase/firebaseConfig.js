import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgimz5GeZdRkNZ_ZKZanIL2G5uJJdJcPQ",
  authDomain: "sdc-website-2618f.firebaseapp.com",
  projectId: "sdc-website-2618f",
  storageBucket: "sdc-website-2618f.appspot.com",
  messagingSenderId: "677482242457",
  appId: "1:677482242457:web:2a6bf90838c08b296d3308"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()