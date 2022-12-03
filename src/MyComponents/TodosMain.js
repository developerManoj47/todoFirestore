import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Fragment } from 'react';
// import { app } from './FirebaseConfig';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import TodoSigninSignupWarp from './TodoSigninSignupWarp';
import TodoItem from './TodoItem';
// import { async } from '@firebase/util';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db, app } from './FirebaseConfig'
import { async } from '@firebase/util';

const auth = getAuth();

const TodosMain = () => {

    const [myTitle, setMyTitle] = useState("");
    const [myDesc, setMyDesc] = useState("");

    const [itemsArray, setItemsArray] = useState([]);

    const [myUid, setMyUid] = useState("");
    // console.log(`my Uid is  ${user.uid}`);

    // checking the authentication 
    const [user, loading, error] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
        setMyUid("");
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setMyUid(uid);
            } else {

            }
        });
    }, [])

    // sending the data to firebase firestore 
    const addData = async (title, desc) => {

        console.log(user.uid);
        let uid = user.uid;
        try {
            const docRef = await addDoc(collection(db, "todoitmes"), {
                uid: uid,
                thetitle: title,
                thedesc: desc
            });
            console.log("Document written with ID: ", docRef.id);
        }
        catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    // useEffect(() => {
    //     const uiduid = user.uid;
    //     setMyUid(uiduid);
    //     console.log(uiduid);
    // }, []);

    // const fatchData = async () => {
    //     try {
    //         let uid = user.uid;
    //         const q = query(collection(db, "todoitems"), where("uid", "==", uid));

    //         const querySnapshot = await getDocs(q);
    //         querySnapshot.forEach((doc) => {
    //             console.log(doc.id, "==== > ", doc.data());
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(() => {
    //     fatchData();
    // }, []);



    // let uid = user.uid;
    // console.log(`my uid is  ${uid}`);
    useEffect(() => {
        async function a() {
            const todoitemsRef = collection(db, "todoitems");
            const q = query(todoitemsRef, where("uid", "==", "huAYhRQ7rQc0wH711r5UnYk2gnv1"));

            const querySnapshot = await getDocs(q);
            console.log(querySnapshot);
            console.log(querySnapshot.empty)
        }
        a()
        // huAYhRQ7rQc0wH711r5UnYk2gnv1
        // const a = [querySnapshot];

        // a.map((doc) => {
        //     console.log(doc);
        //     // console.log(doc.id, "==== > ", doc);
        // })
    }, []);

    // Styling of box 
    const boxStyle = {
        border: "2px solid red",
        padding: "10px",
    }

    if (loading) {
        return (
            <div>
                <p>Initialising User...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div>
                <p>Error: {error}</p>
            </div>
        );
    }
    if (user) {
        // {
        //     setMyUid(user.uid);
        // }
        return (
            <Fragment>

                <div style={boxStyle}>
                    <label>Title</label>
                    <br />
                    <input value={myTitle} onChange={(e) => setMyTitle(e.target.value)} placeholder='Enter the title' />
                    <br />
                    <br />

                    <label>Description</label>
                    <br />
                    <input value={myDesc} onChange={(e) => setMyDesc(e.target.value)} placeholder='Enter the Description here' />
                    <br />
                    <br />
                    <button onClick={() => addData(myTitle, myDesc)}  >Add item</button>
                    <br />
                    <br />
                    <button onClick={() => logOut}>Sing out</button>
                </div>
                <div>
                    <TodoItem />
                </div>
            </Fragment>
        );
    }
    else {
        // {console.log(user.uid)}
        return (
            <div>
                <TodoSigninSignupWarp />
            </div>
        );
    }

}

export default TodosMain
