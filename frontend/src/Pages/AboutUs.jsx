import React from 'react'
import Hero from '../Componets/Hero'
import Biography from '../Componets/Biography'
const AboutUs = () => {
  return (
   <>
   <Hero
    title={"Learn more about Us || Icare medical Institute"}
    imageUrl={"/about.png"}
   />


<Biography imageUrl={"/whoweare.png"}/>

   
   </>
  )
}

export default AboutUs
