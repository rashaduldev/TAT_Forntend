// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiuOP1HcSei_3-DXPdWjvZs9XZRRWOqE8",
  authDomain: "tat-bd.firebaseapp.com",
  projectId: "tat-bd",
  storageBucket: "tat-bd.appspot.com",
  messagingSenderId: "623398732215",
  appId: "1:623398732215:web:de08ba497687f74e312832"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;