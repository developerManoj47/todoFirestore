import React from 'react'
import axios from 'axios';
import { useState} from 'react';
// import { useEffect } from 'react';

export default function FatchApi() {
    const [myData, setMyData] = useState([]);
    const [myError, setMyError] = useState("");


    // useEffect(() => {
    //   axios
    //         .get("https://jsonplaceholder.typicode.com/posts")
    //         .then((res) => {
    //           // console.log("response from api " , res.data);
    //           setMyData(res.data);
    //         })
    //         .catch((error)=> {
    //           // console.log(error.message)
    //           setMyError(error.message);
    //         })
    // }, [])

    function showData() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                // console.log("response from api " , res.data);
                setMyData(res.data);
            })
            .catch((error) => {
                // console.log(error.message)
                setMyError(error.message);
            })
    }

    return (
        <div>
            <h1>Axios tutorial</h1>
            <button onClick={showData}>Click to see the data</button>
            {myError !== "" && <h2>{myError}</h2>}
            {myData.map((post) => {
                const { id, title, body } = post;
                return (
                    <div className='card' key={id}>
                        <h2>{title}</h2>
                        <p>{body}</p>
                    </div>
                )

            })}
        </div>
    )
}
