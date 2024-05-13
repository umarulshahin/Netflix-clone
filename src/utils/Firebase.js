// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt0WBVguVtjNPTAUW8FKvx_iRAiavwDw8",
  authDomain: "netflixgpt-a9385.firebaseapp.com",
  projectId: "netflixgpt-a9385",
  storageBucket: "netflixgpt-a9385.appspot.com",
  messagingSenderId: "470551666318",
  appId: "1:470551666318:web:bf52ef2089e07ffcdab3df",
  measurementId: "G-FW13Z5ZSG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();