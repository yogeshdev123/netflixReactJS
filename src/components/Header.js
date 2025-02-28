import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utilities/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utilities/userSlice';
import { LOGO } from '../utilities/constants';



const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
  
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));
          navigate("/browse");
          
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
          navigate("/");
        }
      });
      //unsubscribe when component unmounts
      return () => unsubscribe();
    },[]);
  return (
    <div className='absolute w-full px-8 py-2  z-10 bg-gradient-to-b from-black flex justify-between'>
     <img className='w-44'
      src={LOGO} alt='logo'/>
{user&&(<div className='flex p-2'>
  <img alt='usericon' src={user?.photoURL} className='w-12 h-12'/>
  <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
</div>)}

    </div>
  )
}

export default Header