import React, { useContext, useState } from 'react'
import { Context } from '../main'
import { Navigate, useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";


const LogIn = () => {
  const {isAuthenticated,setIsAuthenticated} = useContext(Context);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await axios
          .post(
            "http://localhost:4000/api/v1/user/login",
            { email, password, confirmPassword, role: "Patient" },
            {
              withCredentials: true,
              headers: { "Content-Type": "application/json" },
            }
          )
          .then((res) => {
            toast.success(res.data.message);
            setIsAuthenticated(true);
            navigate("/");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
          });
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    if(isAuthenticated){

      return <Navigate to={"/"}/>
    }

  return (
    <div className='container form-component login-form'>
      <h2>Sign In</h2>
      <p>please Login to continue</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deserunt officia molestias doloribus saepe aperiam quidem nihil magni commodi laboriosam.</p>
    <form onSubmit={handleLogin}>
      <input type="text"  value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
      <input type="password"  value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
      <input type="password"  value={confirmPassword}  onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Confirm Password'/>
      <div style={{gap:"10px",justifyContent:"flex-end",flexDirection:"row"}}>

    <p style={{marginBottom:0}}>Not Registered?</p>
    <Link to={"/register"} >Register Now</Link>
      </div>
      <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Login</button>
          </div>
    </form>
   
    </div>
  )
}

export default LogIn
