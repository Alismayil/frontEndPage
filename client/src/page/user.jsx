import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { useNavigate } from "react-router-dom";

function User() {
  const {user, setUser , setRole ,setToken }=useContext(AuthContext)
  const navigate=useNavigate()

  function handleLogOut() {
    setUser(null)
    setRole(null)
    setToken(null)
    navigate("/")
    localStorage.removeItem("user")
    localStorage.removeItem("role")
    localStorage.removeItem("token")
  }
  if (!user) {
    return navigate("/login")
  }

 
  
  return (
    <div style={{marginTop:"200px"}}>
      Hello {user?.username}
      <div>
      <button>Delete account</button><br />
      <button>Edit Profile </button><br />
      <button onClick={handleLogOut}>Log Out</button>
      </div>
      </div>
  )
}

export default User