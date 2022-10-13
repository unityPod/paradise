import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDKLQtUyt_cEoX7k-0MnHwez0kxD9pNu8Y",
  authDomain: "paradise-a3481.firebaseapp.com",
  projectId: "paradise-a3481",
  storageBucket: "paradise-a3481.appspot.com",
  messagingSenderId: "930506076989",
  appId: "1:930506076989:web:ba647fd5c417d4534ecb54",
  measurementId: "G-LSX45HZZM9"
};

const config = initializeApp(firebaseConfig);

export default config; 