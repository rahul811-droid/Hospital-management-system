import React, { useContext } from "react";
import Hero from "../Componets/Hero";
import Biography from "../Componets/Biography";
import MessageForm from "../Componets/MessageForm";
import Departments from "../Componets/Department";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
      
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
