import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext'

function Register() {

  const { axiosRegister } = useContext(AuthContext)

  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  function handleRegister(e) {
    e.preventDefault()
    const userData = {
      username: username,
      password: password
    }
    axiosRegister(userData)
    console.log(userData);
  }




  return (
    <div >
      <form action="" onSubmit={(e) => handleRegister(e)}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='username' required /><br />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='password' required /><br />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register