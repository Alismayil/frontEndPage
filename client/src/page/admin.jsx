import React, {  useEffect, useState } from 'react'
import axios from "axios"

function Admin() {
  const [allUser, setAllUser] = useState([])

  async function AllUsernameFetch() {
    const res= await axios.get("http://localhost:4000/users")
    setAllUser(res.data)
  }
  useEffect(() => {
    AllUsernameFetch()
  }, [])
  console.log(allUser);
  async function deleteUser(userId) {
    const res= await axios.delete(`http://localhost:4000/users/${userId}`)
    AllUsernameFetch()
  }
  return (
    <div style={{ marginTop: "200px", display: "flex" }}>
      <div style={{ backgroundColor: "teal", width: "800px", height: "600px" }}>
        <h1>Isdifadeciler</h1>
        <div style={{display:"flex",gap:"20px",marginLeft:"50px",marginBottom:'20px', backgroundColor: "aqua",width:"80%"}}>
        <p style={{width:"100px"}}>Username</p>
        <p style={{width:"100px"}}>Role</p>

        </div>
        {allUser && allUser?.map((item)=>(
       <div style={{display:"flex",gap:"20px",marginLeft:"50px", backgroundColor: "pink",width:"80%"}}>
          <p style={{width:"100px"}}>{item.username}</p>
          <p style={{width:"100px"}}>{item.role}</p>
          <p style={{width:"100px"}}>
            <button style={{backgroundColor: "red"}} onClick={()=>deleteUser(item._id)}>Delete</button>
          </p>
          <p style={{width:"100px"}}>
            <button style={{backgroundColor: "green"}}>Edit</button>
          </p>
       </div>

        ))}
      </div>
      <div style={{ backgroundColor: "orange", width: "800px" }}>

        <h1>Yuklemeler</h1>
      </div>
    </div>
  )
}

export default Admin