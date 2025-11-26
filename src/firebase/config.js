// Firebase Configuration
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDyIUr2LfJXYf_qei2T1fpAqpwS8w-Y8B4",
  authDomain: "portfolio-visitor-counte-52405.firebaseapp.com",
  databaseURL:
    "https://portfolio-visitor-counte-52405-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-visitor-counte-52405",
  storageBucket: "portfolio-visitor-counte-52405.firebasestorage.app",
  messagingSenderId: "917964300970",
  appId: "1:917964300970:web:66c64ed1cd38b7509e66d3",
  measurementId: "G-6GTT8MMYE5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
