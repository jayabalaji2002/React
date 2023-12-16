import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css"

function Register() {
  return (
    <div className='mainContainer'>
        <h1 className='regPage'>Registration Page</h1> 
        <h2>Click Button to go Login Page</h2>
        <Link to="/login">
        <button className="button-54">Login</button>
        </Link>
    </div>
  )
}

export default Register