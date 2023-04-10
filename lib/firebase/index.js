// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXfcP96IAF97Fqg1nrAOBZFMr_MxxBcGI",
  authDomain: "finance-tracker-b58e4.firebaseapp.com",
  projectId: "finance-tracker-b58e4",
  storageBucket: "finance-tracker-b58e4.appspot.com",
  messagingSenderId: "202450823189",
  appId: "1:202450823189:web:cadabafffaf756ad56061c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app,db, auth};