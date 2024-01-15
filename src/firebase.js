
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAfaNMVGT2NTzi67yHSQsBdZS4rHBLjzpg",
  authDomain: "linkedin-ed7f6.firebaseapp.com",
  projectId: "linkedin-ed7f6",
  storageBucket: "linkedin-ed7f6.appspot.com",
  messagingSenderId: "598314667629",
  appId: "1:598314667629:web:19452cb2f3baf8c9f7b964",
  measurementId: "G-P8DXMM6FHP"
  };


const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
