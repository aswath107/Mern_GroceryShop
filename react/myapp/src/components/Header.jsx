
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext"; // Import AuthContext
import "./App1.css"; // Use a single CSS file for styling

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext); // Destructure user and logout from AuthContext

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.webp" alt="GreenCart Logo" className="logo-image" />
        GREEN CART
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
        <button className="search-button">🔍</button>
      </div>

      <nav>
        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/aboutus">ABOUT US</Link></li>
          <li><Link to="/track-order">TRACK ORDER</Link></li>
          <li><Link to="/categories">CATEGORIES</Link></li>
          <li><Link to="/destination">DESTINATION</Link></li>
          <li><Link to="/ShoppingCart">ShoppingCart</Link></li>
        </ul>
      </nav>

      <div>
        {user ? ( // If user is logged in
          <div className="user-info">
            <img src="/profile-pic.png" alt="Profile" className="profile-pic" />
            <span>{user.name}</span>
            <button onClick={logout} className="logout-button">LOGOUT</button>
          </div>
        ) : ( // If user is not logged in
          <>
            <button className="login-button" onClick={() => navigate("/login")}>LOGIN</button>
            <button className="register-button" onClick={() => navigate("/register")}>REGISTER</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;