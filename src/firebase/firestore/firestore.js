import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { firebaseConfig } from "../firebase.config";
import {doc,setDoc} from 'firebase/firestore';

export const addToFirestore = async (data) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore();

    const {displayName, email, uid} = data;
    const createAt = new Date();

    await setDoc(doc(db, 'users', `${uid}`),{
        displayName: displayName,
        email: email,
        createAt: createAt
    })
}
