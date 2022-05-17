// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtNihmD7YcfzRvm9Y8G3bpy5RCjTsX3vU",
  authDomain: "secretappmountain.firebaseapp.com",
  projectId: "secretappmountain",
  storageBucket: "secretappmountain.appspot.com",
  messagingSenderId: "671562526884",
  appId: "1:671562526884:web:5ceaa5deb6f13b8c31b631",
  measurementId: "G-DCK0DQBPLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);