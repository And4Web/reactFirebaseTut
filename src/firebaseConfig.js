import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCACUmNptvawgzjzW003lc6KOCR6YAPKNE",
  authDomain: "fir-tutorial-f2955.firebaseapp.com",
  projectId: "fir-tutorial-f2955",
  storageBucket: "fir-tutorial-f2955.appspot.com",
  messagingSenderId: "530421719710",
  appId: "1:530421719710:web:eedc13f23818c6eba7118f",
  measurementId: "G-28NTPKEJER",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
