import React from 'react'
import LoginCard from './LoginCard';
import { useState } from 'react';
import { href } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function HeaderButtons() {

  
   

    return (
    <div className="flex gap-4">
        <Link to="/login">
  <button
    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
  >
    Log In
  </button>
  </Link>


  <button
    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200"
    onClick={() => console.log('Sign Up clicked')}
  >
    Sign Up
  </button>
</div>

  )
}

export default HeaderButtons