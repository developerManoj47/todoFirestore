import React from 'react'
import { collection, addDoc, getDoc, doc } from 'firebase/firestore';
import { db, app } from './FirebaseConfig'
import { async } from '@firebase/util';

const FirestoreFirebase = () => {

    //     const addingTheData = async() => {
    //         try {
    //             const docRef = await addDoc(collection(db, "users"), {
    //               first: "Ada",
    //               last: "Lovelace",
    //               born: 1815
    //             });
    //             console.log("Document written with ID: ", docRef.id);
    //           } catch (e) {
    //             console.error("Error adding document: ", e);
    //           }
    //     }

    try {
        const docRef = addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

    const docRef = doc(db, 'todos');
    const docSnap = getDoc(docRef)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    console.log("Document data:", docSnap);

    // if (docSnap.exists()) {
    // } else {
    //     // doc.data() will be undefined in this case
    //     console.log("No such document!");
    // }

    return (
        <div>
            <h1>Hello I am precticing of firestore but it doesn't working</h1>
        </div>
    )
}

export default FirestoreFirebase
