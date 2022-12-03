import React from 'react'
import { useState } from 'react';
import app from './FirebaseConfig'
import { getAuth, signInWithEmailAndPassword , onAuthStateChanged, signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth();

const SingInHooks = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

// fucntion for sign-in of user 
    // function signIn(myEmail , myPassword) {
    //     signInWithEmailAndPassword(auth , myEmail , myPassword)
    //         .then((response) => {
    //             console.log(response.user);
    //         })
    //         .catch((error) => {
    //             console.log(error.message);
    //         })
    // }

// Function to log out 
    const logOut = () => {
        signOut(auth);
    }

    
    const boxStyle =  {
        border : "2px solid black",
        padding: "20px",
        margin: "10px"
    }
    
    const [user , loading , error] = useAuthState(auth);
    if(loading) {
        return (
            <div style={boxStyle}>
                <p>Initialising User....</p>
            </div>
        )
    }
    if(error){
        return (
            <div style={boxStyle}>
                <p>Error: {error}</p>
            </div>
        )
    }
    if(user)
    {
        return (
            <div style={boxStyle}>
                <h2>Current User: {user.email}</h2>
                <button onClick={() => logOut()}>Sign Out</button>
            </div>
        )
    }
    else {
        return (
            <div>
                <input 
                    type="text"
                    value={email}
                    placeholder="Enter your Email here "
                    onChange={(e) => (setEmail( e.target.value))}
                />
                <input
                    type="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={(e) => (setPassword(e.target.value))}
                />
                <button onClick={() => signIn(email , password)}>Sign In</button>
            </div>
          )
    }

  
}

export default SingInHooks
