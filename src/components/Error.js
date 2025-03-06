
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate=useNavigate();
  return (
    <>
    <div>Switch to mobile network if u encounter this message</div>
    <button className='bg-black text-white p-2 rounded-lg inline-block' onClick={()=>{navigate("/")}}>Refresh</button></>
  )
}

export default Error