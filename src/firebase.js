import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBsbZ1lDbyDccZcmzaNzDPvSZd5vu9OoFI",
    authDomain: "azclone-1.firebaseapp.com",
    projectId: "azclone-1",
    storageBucket: "azclone-1.appspot.com",
    messagingSenderId: "989486702296",
    appId: "1:989486702296:web:a27ee242a0ebe480b9c1ad",
    measurementId: "G-9TPKN54J2H"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);  

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }