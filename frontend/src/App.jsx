import React, { useContext, useEffect } from 'react'
import './App.css'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import LogIn from './Pages/LogIn.jsx'
import Appointment from './Pages/Appointment.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import Register from './Pages/Register.jsx'
import Navbar from './Componets/Navbar.jsx'
import Footer from './Componets/Footer.jsx'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Context } from './main.jsx'
import axios from 'axios'


const App = () => {
  const { isAuthenticated,setIsAuthenticated,setUser} = useContext(Context);
  useEffect(()=>{
    const fetchUser = async ()=>{
      try {
        
        const response = await axios.get("http://localhost:4000/api/v1/user/patient/me",{withCredentials:true});
        setIsAuthenticated(true);
        setUser(response.data.user)

      } catch (error) {
        setIsAuthenticated(false);
        setUser({})
      }
    }
    fetchUser();
  },[isAuthenticated])
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </Router>
     
    
    </>
  )
}

export default App
