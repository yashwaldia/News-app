// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
  

const firebaseConfig = {
  apiKey: "AIzaSyC-NMOSD5La_9f8DR06CQgoQNsHTMo06j8",
  authDomain: "webappnews-6cb7a.firebaseapp.com",
  projectId: "webappnews-6cb7a",
  storageBucket: "webappnews-6cb7a.appspot.com",
  messagingSenderId: "86865957087",
  appId: "1:86865957087:web:0ec3f3a2650dc168a0596a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
