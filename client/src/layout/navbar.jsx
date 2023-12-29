import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

function Navbar() {
  const { user,setRole,setToken,setUser } = useContext(AuthContext)
  const navigate = useNavigate()
  function handleLogOut() {
    setUser(null)
    setRole(null)
    setToken(null)
    navigate("/")
    localStorage.removeItem("user")
    localStorage.removeItem("role")
    localStorage.removeItem("token")
  }
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Link to={"/"}>Home</Link>

      {!user ?
        <>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </> : null}

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