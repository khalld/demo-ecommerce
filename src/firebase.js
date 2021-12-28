// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8I-eab0mzlCtD2YtJeJLSrjEwVE52N28",
  authDomain: "e-commerce-demo-16937.firebaseapp.com",
  projectId: "e-commerce-demo-16937",
  storageBucket: "e-commerce-demo-16937.appspot.com",
  messagingSenderId: "617924416079",
  appId: "1:617924416079:web:6d23ba5497782a382f903a",
  measurementId: "G-V3Q6D1FCER"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);