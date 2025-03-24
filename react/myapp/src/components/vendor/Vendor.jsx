import React from "react";
import "./Vendor.css";
import { useNavigate } from "react-router-dom";

const VendorPage = () => {
  const navigate = useNavigate();
  const handleAddPromotion = () => {
    alert("Adding a new promotion");
  };

  return (
    <div className="vendor-container">
      <h1 className="vendor-title">Vendor Dashboard</h1>
      <div className="vendor-sections">
        <button className="vendor-button" onClick={() => navigate("/manageorders")}>
          Manage Orders
        </button>
        <button className="vendor-button" onClick={() =>  navigate("/manageinventory")}>
          Manage Inventory
        </button>
        <button className="vendor-button" onClick={() =>navigate("/salesreport")}>
          Sales Reports
        </button>
        <button className="vendor-button" onClick={() => navigate("/customersupport")}>
          Customer Support
        </button>
        <button className="vendor-button add-product" onClick={() =>  navigate("/addproduct")}>
          Add Product
        </button>
        <button className="vendor-button add-promotion" onClick={handleAddPromotion}>
          Add Promotion
        </button>
      </div>

      <div className="vendor-stats">
        <div className="stat-card">
          <h2>Total Orders</h2>
          <p>125</p>
        </div>
        <div className="stat-card">
          <h2>Pending Shipments</h2>
          <p>30</p>
        </div>
        <div className="stat-card">
          <h2>Revenue</h2>
          <p>$12,450</p>
        </div>
      </div>

      <div className="vendor-activities">
        <h2>Recent Activities</h2>
        <ul>
          <li>Order #1234 has been shipped</li>
          <li>New product "Widget A" added to inventory</li>
          <li>Support ticket #5678 has been resolved</li>
        </ul>
      </div>

      <div className="vendor-support-tickets">
        <h2>Open Support Tickets</h2>
        <ul>
          <li>Ticket #2345: Issue with order #6789</li>
          <li>Ticket #3456: Inventory discrepancy report</li>
        </ul>
      </div>

      <div className="vendor-reviews">
        <h2>Product Reviews</h2>
        <ul>
          <li>Review for product "Widget A": ★★★★☆</li>
          <li>Review for product "Gadget B": ★★★☆☆</li>
        </ul>
      </div>

      <div className="vendor-promotions">
        <h2>Active Promotions</h2>
        <ul>
          <li>Discount code "SAVE10" - 10% off on all items</li>
          <li>Special offer "Buy 1 Get 1 Free" on selected products</li>
        </ul>
      </div>

    </div>
  );
};

export default VendorPage;
