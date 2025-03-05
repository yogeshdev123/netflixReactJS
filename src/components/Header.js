import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utilities/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utilities/userSlice';
import { LOGO, Supported_lang } from '../utilities/constants';
import { addGptMovieResults, toogleGptSearchView } from '../utilities/GptSlice';
import { changeLang } from '../utilities/configSlice';



const Header = ({isGptEnabled}) => {

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
  const handleLangChange=(e)=>{
  dispatch(changeLang(e.target.value));
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
    const handleGptSearchClick=()=>{
      dispatch(addGptMovieResults({movieNames:null,movieResults:null}))
      dispatch(toogleGptSearchView());
    }
  return (
    <div className='absolute w-full px-8 py-2 flex-wrap z-10 bg-gradient-to-b from-black flex justify-between'>
     <img className='w-44'
      src={LOGO} alt='logo'/>
      
     
{user&&(<div className='flex p-2'>
  {isGptEnabled&&(<select className='bg-gray-900 p-2 m-2 text-white' onChange={handleLangChange}>
    {Supported_lang.map((val)=>(<option key={val.identifier} value={val.identifier}>{val.name}</option>))}
  </select>)}
  <button onClick={handleGptSearchClick} className='py-2 px-2 mx-4 bg-purple-800 text-white rounded-lg'>{isGptEnabled?"Home Page":"GPT Search"}</button>
  
  <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
</div>)}

    </div>
  )
}

export default Header