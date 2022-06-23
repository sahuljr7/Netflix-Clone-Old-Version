// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_5jp6-gAtIARI9gBpjKXzHdt0ENrd7nM",
    authDomain: "netflix-clone-c0201.firebaseapp.com",
    projectId: "netflix-clone-c0201",
    storageBucket: "netflix-clone-c0201.appspot.com",
    messagingSenderId: "29580290727",
    appId: "1:29580290727:web:f19224f22f6dfa418a8982"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)