import { initializeApp } from "firebase/app";
// import { initializeAnalytics , getAnalytics } from "firebase/analytics";
import {  getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyATCycjEDiCo9k0aJ9gs7XgaK4kQBR_q8I",
  authDomain: "singin-e59ab.firebaseapp.com",
  projectId: "singin-e59ab",
  storageBucket: "singin-e59ab.appspot.com",
  messagingSenderId: "300735391719",
  appId: "1:300735391719:web:f934bbd4abb6373d0a7f42",
  measurementId: "G-N1E1J8129F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app); 


