// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-EFFDmnW7nknLIO62oxmIBffrSiCEXII",
  authDomain: "dbi-react-app.firebaseapp.com",
  projectId: "dbi-react-app",
  storageBucket: "dbi-react-app.firebasestorage.app",
  messagingSenderId: "529009076143",
  appId: "1:529009076143:web:cd9063f4f3406e0d69f15a",
  measurementId: "G-3N6D95PVMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

export default app;
