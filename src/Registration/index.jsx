import React, { useState } from "react";
import "./Registration.css";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    phone: "",
    email: "",
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
    alert("Registered Successfully!");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register as Donor</h2>

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

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
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
            <span className="icon">📍</span>
          </div>

          <button type="submit" className="submit-btn">
            Register As Donor
          </button>

          <p className="login-text">
            Already Registered? <span>Login</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registration;