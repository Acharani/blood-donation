import React from 'react'
import { useState } from "react";


function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // check in console
    alert("Login Submitted!");
  };

  return (
    <div className="top">
      <div className="navbar">
        <div className="one">
          <div className="sub-nav">

            <div className="logo">
              <img src="" alt="" />
              <h1>JOIN-HANDS</h1>
            </div>

            <div className="blood-data">
              <div className="request">
                <p>Request</p>
                <h1>50</h1>
              </div>
              <div className="donor">
                <p>Donor</p>
                <h1>10</h1>
              </div>
            </div>

            <div className="contact">
              <a href="/contact">
                <button>Contact Us</button>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <p>
            Welcome to our JOIN-HANDS website supports everyone to save a life
            by donating blood and giving them another chance to live!
          </p>
        </div>

        <div className="about-image">
          <img src="bldlog.jpg" alt="Blood Donation" />
        </div>
      </section>

      {/* Login Section */}
      <section className="donate-section">
        <button className="donate-button">Login Now</button>
        <br /><br /><br />

        <a href="/registration">Before you register here</a>
        <p>After you login this page:</p>

        <div className="donate-form">
          <form onSubmit={handleSubmit}>
            
            <label>Email Address:</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
            />

            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              required
            />

            <button type="submit" style={{ backgroundColor: "red" }}>
              Submit
            </button>

          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions, contact us at{" "}
          <a href="mailto:info@blooddonationwebsite.com">
            info@blooddonationwebsite.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2024 JOIN-HANDS Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Login;