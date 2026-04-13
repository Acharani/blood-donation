import React from "react";
import Stats from "../Stats";
import Buttons from "../Buttons";


function Home() {
  return (
    <div className="home">
      <h1>JOIN-HANDS</h1>
      <p className="tagline">
        Connecting life-savers with those in need.
      </p>

     
        <div className="icon-wrapper"> 🤝🩸 </div>
     

      <Stats />
      <p className="description">
        Welcome to our platform. We are dedicated to connecting you with blood donors.
        If you or someone you know is in need of blood, we are here to help.
      </p>

      <Buttons />
    </div>
  );
}

export default Home;