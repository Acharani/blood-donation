import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    password: ""
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
    alert("Login Successfully!");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2> Login </h2>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />

          <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
           
          

          <button type="submit" className="submit-btn">
            
            Login
          </button>

          <p className="login-text">
            Forgot Password ? <span>Login</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;