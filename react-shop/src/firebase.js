// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCl106z4CrwDZQovQPQuU8gkatYVifr8s",
  authDomain: "e-shop-6aa63.firebaseapp.com",
  projectId: "e-shop-6aa63",
  storageBucket: "e-shop-6aa63.appspot.com",
  messagingSenderId: "226248913560",
  appId: "1:226248913560:web:b34df9f7bfb001762496ed"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
export default firestore;