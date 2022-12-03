import React, { Fragment, useEffect, useState } from 'react'
import app from './FirebaseConfig'
import { getAuth, signInWithEmailAndPassword , onAuthStateChanged, signOut } from "firebase/auth";



const auth = getAuth();


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail , setUserEmail ] = useState("");

    function signIn(myEmail , myPassword) {
        signInWithEmailAndPassword(auth , myEmail , myPassword)
            .then((response) => {
                console.log(response.user);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log(user.uid);
              setUserEmail(user.email);
              setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });
    });


    const boxStyle =  {
        border : "2px solid black",
        padding: "20px",
        margin: "10px"
    }


    return (
        <Fragment>

            {isLoggedIn === true ? 
            <div style={boxStyle}>
                <h1>User Email ID is </h1>
                <p>{userEmail}</p>

                <button onClick={() => logOut()}>Sign out</button>
            </div> 

            : 
            <div style={boxStyle}>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your E-mail here " />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter the password " />
                <br />
                <button onClick={() => signIn(email, password)}>Sign In</button>
            </div> }

            {/* <div style={boxStyle}>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your E-mail here " />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter the password " />
                <br />
                <button onClick={() => signIn(email, password)}>Sign In</button>
            </div> */}

        </Fragment>
    )
}

export default SignUp
