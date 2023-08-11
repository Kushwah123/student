import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDtsz5eSYcaFJ9Eakjf9fk0h3UFj5xoOsI",
  authDomain: "login-c7675.firebaseapp.com",
  projectId: "login-c7675",
  storageBucket: "login-c7675.appspot.com",
  messagingSenderId: "721660514950",
  appId: "1:721660514950:web:6009a357c028af63fb3707"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();

export {db, app, auth };
