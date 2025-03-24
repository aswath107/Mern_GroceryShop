import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userType, setUserType] = useState("customer"); // State for user type

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming login is successful here, add your validation or authentication logic
    login({ name: "Admin", email: formData.email, userType });

    // Redirect based on userType
    if (userType === "customer") {
      navigate("/"); // Navigate to home page if customer
    } else if (userType === "vendor") {
      navigate("/vendor"); // Navigate to vendor page if vendor
    }
  };

  const handleTypeChange = (e) => {
    setUserType(e.target.value); // Update userType state based on the selected option
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-header">Login</h2>
        {error && <p className="error-text">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* User Type Selector */}
          <div className="input-group">
            <label htmlFor="user-type">Select User Type</label>
            <select id="user-type" value={userType} onChange={handleTypeChange}>
              <option value="customer">Customer</option>
              <option value="vendor">Vendor</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="forgot-password">Forgot Password?</p>
      </div>
    </div>
  );
};

export default Login;

