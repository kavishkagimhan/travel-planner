import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAY6aYhnVSKm0FNyBCYSflkViCmwtbSHzY",
  authDomain: "travel-plane-4ae7b.firebaseapp.com",
  projectId: "travel-plane-4ae7b",
  storageBucket: "travel-plane-4ae7b.appspot.com",
  messagingSenderId: "547579356416",
  appId: "1:547579356416:web:f627cadc964e09c5657fe5"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);