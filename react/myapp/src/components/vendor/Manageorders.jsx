import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Manageorders.css";

const Manageorders = () => {
  const navigate = useNavigate();
  
  // Sample Orders State
  const [orders, setOrders] = useState([
    { id: 101, customer: "Alice Johnson", contact: "123-456-7890", product: "Laptop", date: "2025-03-01", status: "Pending", amount: "$120", payment: "Paid" },
    { id: 102, customer: "Bob Smith", contact: "987-654-3210", product: "Phone", date: "2025-02-28", status: "Shipped", amount: "$250", payment: "Paid" },
    { id: 103, customer: "Charlie Brown", contact: "456-789-0123", product: "Headphones", date: "2025-02-27", status: "Delivered", amount: "$75", payment: "Unpaid" },
  ]);

  // Function to delete an order
  const handleDelete = (orderId) => {
    const confirmDelete = window.confirm("Are you sure you want to cancel this order?");
    if (confirmDelete) {
      setOrders(orders.filter(order => order.id !== orderId));
    }
  };

  return (
    <div className="orders-container">
      <h1 className="orders-title">Manage Orders</h1>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Payment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
              <td>{order.amount}</td>
              <td>{order.payment}</td>
              <td>
                <button 
                  className="action-button view" 
                  onClick={() => navigate(`/view/${order.id}`, { state: { order } })}>
                  View
                </button>
                <button 
                  className="action-button update" 
                  onClick={() => navigate(`/update/${order.id}`, { state: { order } })}>
                  Update
                </button>
                <button 
                  className="action-button cancel" 
                  onClick={() => handleDelete(order.id)}>
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Manageorders;
