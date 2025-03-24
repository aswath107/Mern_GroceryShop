import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLeaf } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      {/* Grid Container */}
      <div className="footer-grid">
        {/* Contact Info */}
        <div className="footer-item">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <p>greenCart@shop.com</p>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <p>Myleripalayam Village, Coimbatore</p>
            </div>
            <div className="contact-item">
              <FaPhone className="icon" />
              <p>+02 5421 234 560</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-item">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-item">
          <h4>Newsletter</h4>
          <p>Subscribe for fresh updates!</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button>
              <FaLeaf className="leaf-icon" /> Subscribe
            </button>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-item">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Green Cart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;