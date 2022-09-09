import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAYx0Qk2vldy7CZyyNlbuX60x1n9OPM3AM",
  authDomain: "clone-6998b.firebaseapp.com",
  projectId: "clone-6998b",
  storageBucket: "clone-6998b.appspot.com",
  messagingSenderId: "791504856469",
  appId: "1:791504856469:web:e95160605459296c14029c"

};

  const app = initializeApp(firebaseConfig);
  export const db=getFirestore(app)
  export const auth=getAuth(app);

