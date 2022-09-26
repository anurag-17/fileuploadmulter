import React, { useState } from 'react'
import "./AdminLogin.css";



export const AdminLogin = () => {
const [adminData, setAdminData] = useState({
    username: "",
    userpwd: ""
})
const Input_Handler = (e) =>{
    setAdminData({...adminData, [e.target.name]: e.target.value})
}
const Submittion = (e)=>{
e.preventDefault()
setAdminData(adminData)
console.log(adminData);
setAdminData({
    username: "",
    userpwd: ""
})
}


    return (
        <>
            <div className="container">
                <div className="contentAdmin">
                    <h3>Admin Login</h3>
                    <form action="" onSubmit={Submittion}>
                        <div className="flexbox">
                            <h5>User Name</h5>
                            <input type="text" name="username" placeholder='Enter user name' onChange={Input_Handler} value={adminData.username}/>
                        </div>
                        <div className="flexboxA">
                            <h5>Password</h5>
                            <input type="password" name="userpwd" placeholder='Enter password' onChange={Input_Handler}value={adminData.userpwd} />
                        </div>
                        <div className="buton">
                            <input type="submit" value="Login" className='btn btn-success' id='buttonSubmit' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
