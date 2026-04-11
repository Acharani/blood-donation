import React from 'react'
import { useState } from "react";


function Request() {
  const [formData, setFormData] = useState({
    patientName: "",
    phone: "",
    hospital: "",
    bloodGroup: "",
    emergency: "",
    dateTime: "",
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
    alert("Request Submitted!");
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
            Welcome to our JOIN-HANDS website. If you or someone you know is in need
            of blood, we are here to help. Please fill out the form below, and our
            team will connect you with donors.
          </p>
        </div>

        <div className="about-image">
          <img src="bldreq1.jpg" alt="Blood Donation" />
        </div>
      </section>

      {/* Request Section */}
      <section className="donate-section">
        <button className="donate-button">Request Blood</button>
        <br /><br /><br />

        <a href="/registration">Before you register here</a>
        <p>Then fill the details below:</p>

        <div className="donate-form">
          <form onSubmit={handleSubmit}>

            <label>Patient Name:</label>
            <input
              type="text"
              name="patientName"
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

            <label>Hospital:</label>
            <input
              type="text"
              name="hospital"
              onChange={handleChange}
              required
            />

            <label>Required Blood Type:</label>
            <select
              name="bloodGroup"
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

            <label>Emergency:</label>
            <select
              name="emergency"
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Urgent">Urgent</option>
              <option value="Non-urgent">Non-urgent</option>
            </select>

            <label>Blood Needed Date & Time:</label>
            <input
              type="datetime-local"
              name="dateTime"
              onChange={handleChange}
              required
            />

            <button type="submit">Submit</button>

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

export default Request;