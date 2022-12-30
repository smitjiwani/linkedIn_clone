
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCWVqbRzot34P-XAhV75NyoPcIVycvcmwE",
    authDomain: "linkedin-clone-639f1.firebaseapp.com",
    projectId: "linkedin-clone-639f1",
    storageBucket: "linkedin-clone-639f1.appspot.com",
    messagingSenderId: "229454112654",
    appId: "1:229454112654:web:235ea0afa031ca018e66df",
    measurementId: "G-WL37Z81NT9"
  };


const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};