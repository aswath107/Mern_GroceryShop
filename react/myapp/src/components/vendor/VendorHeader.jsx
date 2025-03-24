import React from 'react';
import "./Vendor.css"
const VendorHeader = ({ vendorName }) => {
  return (
    <header className="vendor-header">
      <div className="vendor-header-logo">
        <img src="/logo.png" alt="Vendor Logo" className="logo" />
      </div>
      <div className="vendor-header-info">
        <h1>Welcome, {vendorName}</h1>
        <p>Your Business Dashboard</p>
      </div>
    </header>
  );
};

export default VendorHeader;

