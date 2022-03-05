import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const createUser = async(email,password) => {
    await createUserWithEmailAndPassword(auth, email, password)
}

export const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password).then((result)=> console.log(result))
}