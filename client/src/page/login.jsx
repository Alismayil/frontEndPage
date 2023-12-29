import React, { useContext , useState } from 'react'
import { AuthContext } from '../context/authContext'

function Login() {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const {axiosLogin}=useContext(AuthContext)

    function handleLogin(e) {
        e.preventDefault()
        const userData = {
            username: username,
            password: password
          }
          axiosLogin(userData)
    }

    

    return (
        <div style={{marginTop:"200px"}}>
           <form action="" onSubmit={(e)=>handleLogin(e)}>
           <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='username' required/><br/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='password' required /><br/>
            <button type='submit'>Login</button>
           </form>
        </div>
    )
}

export default Login