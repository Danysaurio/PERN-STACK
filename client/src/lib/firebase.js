import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFUHK4aNZM4-cvztNrpQ8AdNX1koBcDvo",
  authDomain: "danytodoapp.firebaseapp.com",
  projectId: "danytodoapp",
  storageBucket: "danytodoapp.appspot.com",
  messagingSenderId: "613918819008",
  appId: "1:613918819008:web:2d2375ee3d18f397d62325",
};

const firebaseApp = initializeApp(firebaseConfig);

export const todosStore = getFirestore();
