import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsMIzkW-0lQagxiieL6JkbMckwge-3yNU",
  authDomain: "react-native-5dd97.firebaseapp.com",
  projectId: "react-native-5dd97",
  storageBucket: "react-native-5dd97.appspot.com",
  messagingSenderId: "501186761087",
  appId: "1:501186761087:web:62b664a27d0811e7480a4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)