import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({roles}) => {
    const {user} =useContext(AuthContext)
  return ( 
    roles.includes(user.role) ? <Outlet/> : <Navigate to={"/admin"}/>

  )
}

export default PrivateRoute