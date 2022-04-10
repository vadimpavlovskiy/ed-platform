import { initializeApp } from "firebase/app";
import {arrayRemove, arrayUnion, collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import { firebaseConfig } from "../firebase.config";
import {doc,getDoc,setDoc, updateDoc} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { documentId } from "firebase/firestore";

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
export const getData = async (collection, uid) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore()
    const docRef = doc(db, collection, uid);
    const docSnap = await getDoc(docRef)
    return await docSnap.data();
}


// setUserData allow you to add new data or update data in profile
export const setUserData = async (data, document, uid) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore();

    for (const [key, value] of Object.entries(data)) {
        await updateDoc(doc(db, document, `${uid}`), {
           [key]: value 
        })
      }
}

export const setWishlist = async (data, document, uid) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore();

     const isExist = await getData(document, uid);
     
     if(isExist.wishlist === undefined || !isExist.wishlist.includes(data)){
        return await updateDoc(doc(db, document, `${uid}`),{
            wishlist: arrayUnion(data)
        });
     } else {
            return await updateDoc(doc(db,document,`${uid}`), {
                wishlist: arrayRemove(data)
            })
     }
    }
export const setCartList = async (id, price, document, uid) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore();

    const isExist = await getData(document, uid);

        if( isExist.user_courses === undefined || !isExist.user_courses.includes(id)){
            return await updateDoc(doc(db, document, `${uid}`),{
                cart: arrayUnion(
                    {
                        price: price,
                        id: id
                    }
                )
            });
        }
        else{
            alert ("You already bought this course! ")
        }
     
}
export const getCourses = async () => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore();

    const querySnapshot = await getDocs(collection(db, `courses`));
    const test = []
    await querySnapshot.forEach(doc=>{
        test.push({
            id: doc.id,
            data: doc.data()
        })
    })
    return test; 
}      
export const getMyCourses = async (id) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore();

    const querySnapshot = await getDocs(collection(db, `courses`),where(documentId(), '==', id));
    const test = []
    querySnapshot.forEach((doc) => {
        if(id === doc.id){
            test.push({
                id: doc.id,
                data: doc.data()
            })
        }
        // doc.data() is never undefined for query doc snapshots
      });
      return test
}