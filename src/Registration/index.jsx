import React from "react";
import { useState } from "react";


function App() {
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
            by donating the blood and giving them another chance to live!
          </p>
        </div>

        <div className="about-image">
          <img src="bldireg.jpg" alt="Blood Donation" />
        </div>
      </section>

      {/* Donate Section */}
      <section className="donate-section">
        <button className="donate-button">Registration Form</button>

        <div className="donate-form">
          <form>
            <label>Name:</label>
            <input type="text" name="name" required />

            <label>Age:</label>
            <input type="number" name="age" required />

            <label>Gender:</label>
            <input type="text" name="gender" required />

            <label>Blood Type:</label>
            <select name="bloodType" required>
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
            <input type="email" name="email" required />

            <label>Contact Number:</label>
            <input type="text" name="contactNumber" required />

            <label>Contact Address:</label>
            <input type="text" name="address" required />

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <center>
        <a href="/login">Login here</a>
      </center>

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

export default App;