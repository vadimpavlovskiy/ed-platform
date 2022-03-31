import { initializeApp } from "firebase/app";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

import { firebaseConfig } from "../firebase.config";

 // This method is using when u wanna to upload a new image
export const setAvatar = async (collection, path, file , uid) => {
    const app = initializeApp(firebaseConfig);
    const firebaseApp = initializeApp(firebaseConfig);
    const storage = getStorage(firebaseApp);
    const db = getFirestore();

    const avatarRef = ref(storage, `${path}/${uid}`);

    await uploadBytesResumable(avatarRef, file);

    // Get URL and add to firestore
    await getDownloadURL(avatarRef).then((url) => {
        updateDoc(doc(db, collection, `${uid}`), {
            avatarUrl: url 
    });
})
}