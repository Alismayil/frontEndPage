import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { useNavigate } from "react-router-dom";

function User() {
  const {user}=useContext(AuthContext)
  const navigate=useNavigate()
  
  if (!user) {
    return navigate("/login")
  }
  return (
    <div>Hello {user?.username}</div>
  )
}

export default User