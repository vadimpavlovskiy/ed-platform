import { initializeApp } from "firebase/app";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getMetadata, getDownloadURL } from "firebase/storage"

import { firebaseConfig } from "../firebase.config";
import { setUserData } from "../firestore/firestore";
import { onSnapshot } from "firebase/firestore";

 // This method is using when u wanna to upload a new image
export const setAvatar = async (file, uid) => {
    const firebaseApp = initializeApp(firebaseConfig);
    const storage = getStorage(firebaseApp);

    const avatarRef = ref(storage, `${uid}`);

    await uploadBytesResumable(avatarRef, file);
}
export const setAvatarDataToDatabase = async(uid) => {
    const firebaseApp = initializeApp(firebaseConfig);
    const storage = getStorage(firebaseApp);
    const avatarRef = ref(storage, `${uid}`);
    const db = getFirestore();

    await getDownloadURL(avatarRef).then((url) => {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore();

        updateDoc(doc(db, 'users', `${uid}`), {
            avatarUrl: url 
    });
})
}