import React, { Fragment, useState } from 'react'
import app from './FirebaseConfig'
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";

const auth = getAuth();

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const []

    // ther function sing up and we cna say create account into the webpage 
    function signUp(myEmail, myPassword) {

        createUserWithEmailAndPassword(auth, myEmail, myPassword)
            .then((response) => {
                console.log(response.user)
                alert(`the user ${response.user.email} Sign up successfully`)
            })
            .catch((error) => {
                console.log(error);
                alert(error.message);
            });
    }

    // function signIn(myEmail , myPassword) {
    //     signInWithEmailAndPassword(auth , myEmail , myPassword)
    //         .then((response) => {
    //             console.log(response.user);
    //         })
    //         .catch((error) => {
    //             console.log(error.message);
    //         })
    // }

    const boxStyle =  {
        border : "2px solid black",
        padding: "20px",
        margin: "10px"
    }


    return (
        <Fragment>

            
            <div  style={boxStyle}>
                {/* onChange={(e) => setEmail(e.target.value)} */}
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your E-mail here " />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter the password " />
                <br />
                <button onClick={() => signUp(email, password)}>Sign up</button>

            </div>

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
