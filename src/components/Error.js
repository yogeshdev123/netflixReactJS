
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate=useNavigate();
  return (
    <>
    <div>Switch to mobile network if u encounter this message</div>
    <button onClick={()=>{navigate("/")}}>Refresh</button></>
  )
}

export default Error