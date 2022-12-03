import React , { Fragment, useState } from 'react';
import { app } from './FirebaseConfig';
import { getAuth } from 'firebase/auth';
// import { createUserWithEmailAndPassword }  from 'firebase/auth'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const auth = getAuth();

const TodoSignup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const boxStyle =  {
        border : "2px solid black",
        padding: "20px",
        margin: "10px"
    }


    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        return (
            <div>
                <p>Registered User: {user.user.email}</p>
            </div>
        );
    }

    return (
        <Fragment>
            <div style={boxStyle}>
                {/* onChange={(e) => setEmail(e.target.value)} */}
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your E-mail here " />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter the password " />
                <br />
                <button onClick={() => createUserWithEmailAndPassword(email , password )}>Register</button>

            </div>
        </Fragment>
    )
}

export default TodoSignup
