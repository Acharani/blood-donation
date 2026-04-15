import React from "react";
import "./BloodBank.css";

function BloodBank() {

  const bloodBanks = [
    {
      name: "Red Cross Blood Bank",
      location: "Visakhapatnam",
      contact: "9876543210"
    },
    {
      name: "Government General Hospital Blood Bank",
      location: "Guntur",
      contact: "9123456780"
    },
    {
      name: "Apollo Blood Bank",
      location: "Hyderabad",
      contact: "9012345678"
    },
    {
      name: "City Care Blood Bank",
      location: "Vijayawada",
      contact: "9988776655"
    }
  ];

  return (
    <div className="bb-container">
      <h1>Blood Banks</h1>

      <div className="bb-list">
        {bloodBanks.map((bank, index) => (
          <div className="bb-card" key={index}>
            <h3>{bank.name}</h3>
            <p><strong>Location:</strong> {bank.location}</p>
            <p><strong>Contact:</strong> {bank.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BloodBank;