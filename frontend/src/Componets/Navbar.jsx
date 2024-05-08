import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {Context} from '../main'
import axios from 'axios';
import { toast } from 'react-toastify';
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {

    const [show,setShow] = useState("");
    const {isAuthenticated,setIsAuthenticated} = useContext(Context);

    const navigate = useNavigate();

const handleLogOut=async()=>{

    await axios.get("http://localhost:4000/api/v1/user/patient/logout",{
    withCredentials:true,
    }).then(res=>{
        toast.success(res.data.message);
        setIsAuthenticated(false);
    }).catch((error)=>{
        toast.error(error.response.data.message)
    })
    


}

const gotoLogin =async()=>{

    navigate('./login')
}




  return (
    <nav className='container'>
        <div className="logo">ShreeLaxmi Care</div>
        <div className={show? "navLinks showmenu" : "navLinks"}>
        <div className="links">
            <Link to={"/"}>HOME</Link>
            <Link to={"/appointment"}>APPOINTMENT</Link>
            <Link to={"/about"}>ABOUT US</Link>
        </div>
        {isAuthenticated?(<button className='logoutBtn btn' onClick={handleLogOut}> LogOut</button>)

        :(<button className='logoutBtn btn' onClick={gotoLogin}>LogIn</button>)}
        </div>
    <div className="hamburger" onClick={()=>setShow(!show)}>

        <GiHamburgerMenu/>
    </div>
    </nav>
  )
}

export default Navbar
