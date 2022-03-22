import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { firebaseConfig } from "../firebase.config";
import {doc,getDoc,setDoc, updateDoc} from 'firebase/firestore';
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
export const getUserData = async (uid) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore()
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef)
    return await docSnap.data();
}
export const setUserData = async (data, uid) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore();

    for (const [key, value] of Object.entries(data)) {
        await updateDoc(doc(db, 'users', `${uid}`), {
           [key]: value 
        })
      }
}