import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkneLAjs7fDU1xeR1V9aatUqQwO9mBoxY",
  authDomain: "travel-memories-135a1.firebaseapp.com",
  projectId: "travel-memories-135a1",
  storageBucket: "travel-memories-135a1.appspot.com",
  messagingSenderId: "346379691733",
  appId: "1:346379691733:web:4e79b56b08782d1227e45c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Setting up services
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)

// Setting up provider
export const provider = new GoogleAuthProvider()



