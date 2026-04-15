import React from "react";
import Stats from "../Stats";
import Buttons from "../Buttons";
import {Link} from "react-router-dom";


function Home() {
  return (
    <div className="home">
       <h1><span  className="brand">Save a Life</span></h1>
     
      <p className="tagline">
        Connecting life-savers with those in need.
      </p>

     
        <div className="icon-wrapper"> 🤝🩸 </div>
     

      <Stats />
      <p className="description">
        Welcome to our platform. We are dedicated to connecting you with blood donors.
        If you or someone you know is in need of blood, we are here to help.
      </p>
      <Link to="/request">
      <button className="request-btn"> Request Blood Now</button>
      </Link>

      <Link to="/contact">
      <button className="contact-btn">Contact Us</button>
      </Link>

      
    </div>
  );
}

export default Home;