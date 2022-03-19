import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";
import { signOut } from "firebase/auth";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { addToFirestore } from "./firestore/firestore";

const app = initializeApp(firebaseConfig);
const auth = getAuth();


export const createUser = async(email,password, displayName) => {
    await createUserWithEmailAndPassword(auth, email, password).then(result=> addToFirestore(result.user, displayName))
}

export const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password).then((result)=> {return result})
}

export const signOutFromApp = async () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    await signOut(auth)
}