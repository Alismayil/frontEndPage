import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from "axios"
import { jwtDecode } from "jwt-decode";
import {  useNavigate } from "react-router-dom";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)
      const [token, setToken] = useState(localStorage.getItem('token') ||  null)
      const [role, setRole] = useState(localStorage.getItem('role') || null)
      

    const navigate=useNavigate()

    const axiosRegister = async (userData) => {
        try {
            const res = await axios.post("http://localhost:4000/register", {
                username: userData.username,
                password: userData.password
            })
            console.log("token", res.data);
            const decoded = jwtDecode(res.data);
            console.log(decoded);
            setUser(decoded)
            setRole(decoded.role)
            setToken(res.data)
            localStorage.setItem("user", JSON.stringify(decoded))
            localStorage.setItem("role", JSON.stringify(decoded.role))
            localStorage.setItem("token", JSON.stringify(res.data))
            navigate("/user")

        } catch (error) {
            console.log(error);
        }

    }

    const axiosLogin = async (userData)=>{
       try {
        const res=await axios.post("http://localhost:4000/login",{
        username:userData.username,
        password:userData.password
        })
        const decoded = jwtDecode(res.data);
        console.log(decoded);

        setUser(decoded)
        setRole(decoded.role)
        setToken(res.data)

        localStorage.setItem("user", JSON.stringify(decoded))
        localStorage.setItem("role", JSON.stringify(decoded.role))
        localStorage.setItem("token", JSON.stringify(res.data))

        navigate("/user")
       } catch (error) {
        console.log(error.response);
       }
    }

    function handleLogOut() {
        setUser(null)
        setRole(null)
        setToken(null)

        localStorage.removeItem("user")
        localStorage.removeItem("role")
        localStorage.removeItem("token")
    }

    const data = {
        axiosRegister,
        axiosLogin,
        user,
        role,
        token,
        handleLogOut
        
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

