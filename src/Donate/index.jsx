import React from 'react'
import { useState } from "react";


function Donate() {
  const [formData, setFormData] = useState({
    name: "",
    bloodType: "",
    email: "",
    phone: "",
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
    alert("Donation Form Submitted!");
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

      {/* Donate Form */}
      <div className="container">
        <h2><u>Donate Blood</u></h2>

        <form onSubmit={handleSubmit}>
          
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            required
          />

          <label>Blood Type:</label>
          <select
            name="bloodType"
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>

          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            required
          />

          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            required
          />

          <button type="submit" style={{ backgroundColor: "red" }}>
            Submit
          </button>
        </form>
      </div>

      <center>
        <a href="/registration">Before you register here</a>
      </center>
    </div>
  );
}

export default Donate;