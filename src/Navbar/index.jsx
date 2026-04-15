import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">JOIN-HANDS </h2>

      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-item">Home</NavLink>
        </li>
        <li>
          <NavLink to="/registration" className="nav-item">Registration</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-item">About</NavLink>
        </li>
        <li>
          <NavLink to="/bloodbank" className="nav-item"> Blood Bank</NavLink>
        </li>
        <li>
          <NavLink to="/donate" className="nav-item">Donate</NavLink>
        </li>
        <li>
          <NavLink to="/login" className="nav-item">Login</NavLink>
        </li>

      </ul>
    </div>
  );
}

export default Navbar;