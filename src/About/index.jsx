import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1><span  className="brand">About Join Hands</span></h1>
      <div className="text-wrapper">

      <p className="about-text">
        <span>
        JOIN-HANDS is a platform designed to connect blood donors with people
        in need. Our mission is to save lives by making blood donation easy,
        fast, and accessible.
        
        </span>
      </p>
      </div>

      <div className="about-sections">
        <div className="about-card">
          <h3>🎯 Our Mission</h3>
          <p>
            To ensure that no life is lost due to lack of blood by connecting
            donors and receivers instantly.
          </p>
        </div>

        <div className="about-card">
          <h3>❤️ What We Do</h3>
          <p>
            We provide a platform where users and donors to register and whe they  need the blood by using the request and blood banks to find donor easily.

          </p>
        </div>

        <div className="about-card">
          <h3>🤝 Our Vision</h3>
          <p>
            To build a strong community of life-savers who are ready to help
            anytime, anywhere.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;