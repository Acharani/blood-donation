import React, { useState } from "react";
import "./Request.css";

function Request() {
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    phone: "",
   
    location: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // later connect backend
    alert("Requested Successfully!");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2> Request </h2>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />

          <label>Blood Group</label>
          <select
            name="bloodGroup"
            onChange={handleChange}
            required
          >
            <option value="">Select Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>

          <label>Contact Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            onChange={handleChange}
            required
          />

         
          <label>Location</label>
          <div className="location-box">
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              onChange={handleChange}
              required
            />
           
          </div>

          <button type="submit" className="submit-btn">
            
            Request Blood NOW
          </button>

          <p className="login-text">
            Already Registered? <span>or Register Here</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Request;