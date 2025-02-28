import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utilities/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utilities/firebase';

import { useDispatch } from 'react-redux';
import { addUser } from '../utilities/userSlice';
import { USER_AVATAR } from '../utilities/constants';
// import NetflixLogo from "../utilities/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg";
const Login = () => {
 
  const dispatch=useDispatch();
  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const handleButtonClick=(e)=>{
    e.preventDefault();
    //validate the form data
    
  
    let msz=checkValidData(email.current.value,password.current.value);
    setErrorMessage(msz);
    
    if(msz)return;
    // singin/signup logic
    if(!isSignInForm){
      //Sign Up Logic

      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR
          }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
                          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL,}));
         
          }).catch((error) => {
            // An error occurred
            // ...
            errorMessage(error.message)
          });
         
          setIsSignInForm(!isSignInForm);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +"-"+ errorMessage);
          // ..
        });
    }
    else{
      //Sign In Logic
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    // setErrorMessage("Successfully Signned In");
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+ errorMessage);
  });
    }

  }
  const toogleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div className='relative'>
        <Header/>
        <div className='absolute'>
        <img src={"https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_medium.jpg"} className='w' style={{}} alt='netflix'/></div>
        <form className='absolute my-36 mx-auto right-0 left-0 p-12 w-3/12 text-white bg-black rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up "}</h1>
      {!isSignInForm&&(<input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>)}
          <input ref={email} type='text' placeholder='Email' className='p-4 my-4 w-full bg-gray-700'/>
         
          <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
          <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up "}</button>
          <p className='py-4 cursor-pointer' onClick={toogleSignInForm}>{isSignInForm?"New to Netflix?Sign Up Now":"Already Registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login;
