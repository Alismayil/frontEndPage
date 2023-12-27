import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{display:"flex", gap:"10px"}}>
    <Link to={"/"}>Home</Link>
    <Link to={"/login"}>Login</Link>
    <Link to={"/register"}>Register</Link>
    <Link to={"/user"}>User</Link>
    </div>
  )
}

export default Navbar