import React, { useState } from 'react'
import Header from './Header';
// import NetflixLogo from "../utilities/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg";
const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const toogleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src={"https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_medium.jpg"} className='w' style={{}} alt='netflix'/></div>
        <form className='absolute my-36 mx-auto right-0 left-0 p-12 w-3/12 text-white bg-black rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up "}</h1>
      {!isSignInForm&&(<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>)}
          <input type='text' placeholder='Email' className='p-4 my-4 w-full bg-gray-700'/>
         
          <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up "}</button>
          <p className='py-4 cursor-pointer' onClick={toogleSignInForm}>{isSignInForm?"New to Netflix?Sign Up Now":"Already Registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login;
