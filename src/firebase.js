// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDgmdXB_kK0SxUZGhT8kmk0tsH0ZsPryE8",
  authDomain: "clone-32922.firebaseapp.com",
  projectId: "clone-32922",
  storageBucket: "clone-32922.appspot.com",
  messagingSenderId: "474477392098",
  appId: "1:474477392098:web:87e8e5eb2078a6ce04aebb",
  measurementId: "G-N8933Y087R"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };