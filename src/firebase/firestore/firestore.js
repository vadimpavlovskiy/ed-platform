import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { firebaseConfig } from "../firebase.config";
import {doc,setDoc} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

export const addToFirestore = async (data, displayName) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore();

    
    const {email, uid} = data;
    const createAt = new Date();

    await setDoc(doc(db, 'users', `${uid}`),{
        displayName: displayName,
        email: email,
        createAt: createAt
    })
}
export const checkStatus = async() => {
    const app = initializeApp(firebaseConfig)
    const db = getFirestore();
    const auth = getAuth();
}
