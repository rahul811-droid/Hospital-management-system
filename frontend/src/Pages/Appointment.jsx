import React from 'react'
import AppointmentForm from '../Componets/AppointmentForm'
import Hero from '../Componets/Hero'
const Appointment = () => {
  return (
    <div>
      <Hero title={"Schedule Your Appointment | Icare Medical Institute"} imageUrl={"/signin.png"}/>
      <AppointmentForm/>
    </div>
  )
}

export default Appointment
