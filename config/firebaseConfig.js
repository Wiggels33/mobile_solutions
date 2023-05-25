// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP-crRanxWOUdvekPrLXKvB9VcO1P14Xg",
  authDomain: "ktrauth-460d2.firebaseapp.com",
  projectId: "ktrauth-460d2",
  storageBucket: "ktrauth-460d2.appspot.com",
  messagingSenderId: "205922453253",
  appId: "1:205922453253:web:710263e27ad8e8f080196c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { app, db };
