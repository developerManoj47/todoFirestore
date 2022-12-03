import React from 'react';
import TodoSignup from './TodoSignup'
import TodoSignin from './TodoSignin'

const TodoSigninSignupWarp = () => {

    const boxStyle = {
        border: "2px solid black",
        padding: "20px",
        margin: "10px"
    }

  return (
    <div style={boxStyle}>
      <TodoSignup />
      <TodoSignin />
    </div>
  )
}

export default TodoSigninSignupWarp
