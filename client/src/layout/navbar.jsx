import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

function Navbar() {
  const {user, handleLogOut}=useContext(AuthContext)
  return (
    <div style={{display:"flex", gap:"10px"}}>
    <Link to={"/"}>Home</Link>
    
    {!user ?
    <>
      <Link to={"/login"}>Login</Link>
     <Link to={"/register"}>Register</Link>
     </> : null }
   
    {user ?  
    <>
    <Link to={"/admin"}>Admin</Link>
     <button onClick={handleLogOut}>Log Out</button>
    </>
    : null}
    <Link to={"/user"}>User</Link>
   
    </div>
  )
}

export default Navbar