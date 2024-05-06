// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  collection,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// const test = getDocs(collection(firestore, "tasksList"));

// const specialTest = () => {
//   // const docData = {
//   //   title: "tarea 1",
//   //   description: "Esta es mi tarea bien verga",
//   //   completed: "false",
//   // };

//   // setDoc(test, docData);
//   return test;
// };
// // if (!firebase.apps.length) {
// //   firebase.initializeApp(firebaseConfig);
// // }

// export default specialTest;
