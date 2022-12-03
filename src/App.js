import React from 'react'
// import FatchApi from './MyComponents/FatchApi'
// import SignUp from './MyComponents/SignUp'
// import SignIn from './MyComponents/SignIn'
// import SingInHooks from './MyComponents/SingInHooks'
// import FirestorePrectice from './MyComponents/FirestorePrectice';
// import FirestoreFirebase from './MyComponents/FirestoreFirebase'
import './App.css';
// import { Firestore } from 'firebase/firestore';

// All import for todo 
import TodosMain from './MyComponents/TodosMain'




function App() {

  return (
    <div className='main-container'>

      <TodosMain />


      {/* <FirestoreFirebase /> */}
      {/* firestore implimentation  */}
      {/* <FirestorePrectice /> */}

      {/* Sign up and Sign In using firebase */}
      {/* <SignUp /> */}

      {/*  Sign In using firebase */}
      {/* <SignIn /> */}

      {/* Sign IN & sign up using firebase hooks */}
      {/* <SingInHooks /> */}

      {/* Fatch Api using Axios Module */}
      {/* <FatchApi /> */}

    </div>

  )

}

export default App;
