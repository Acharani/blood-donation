import React, { useState } from "react";
import "./Donate.css";

function Donate() {
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    phone: "",
    location: "",
    willingToDonate: false,
    potentialDonor: false
  });

  const handleChange = (e) => {
    const { name, value, type ,checked }= e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // later connect backend
    alert("Ready For Donation");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2> Donate to Save Life </h2>

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

          <label>
            <input
             type="checkbox"
             name="willingToDonate"
             checked={formData.willingToDonate}
             onChange={handleChange}
             />
             I am willing to be contacted for emergency blood requests.
          </label>

          <label>
            <input
            type="checkbox"
            name="potentialDonor"
            checked={formData.potentialDonor}
            onChange={handleChange}
            />

            I constent to register as a potential blood donor.

            </label>

          

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
            
            Donate to Save Life
          </button>

        </form>
      </div>
    </div>
  );
}

export default Donate;