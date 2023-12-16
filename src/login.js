import React from 'react';
import { Link } from 'react-router-dom';
import './login.scss'

function login() {
   return (
    <div>
        <h1 className='headOne'>Hello User</h1>
        <Link to="/register">
            <button>Go to Login page</button>
        </Link>
    </div>
  )
}

export default login