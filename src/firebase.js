import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBMc6oZ97YyihwM_2ZJVJbFP9dNA9maC0s",
  authDomain: "instagram-mern-29a98.firebaseapp.com",
  projectId: "instagram-mern-29a98",
  storageBucket: "instagram-mern-29a98.appspot.com",
  messagingSenderId: "643717030699",
  appId: "1:643717030699:web:a007dc2ce028847874db6e"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
