// import React from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import "./view.css";

// const View = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const order = location.state?.order || {};

//   return (
//     <div className="order-details-container">
//       <h1>Order Details</h1>
//       <table className="order-details-table">
//         <tbody>
//           <tr>
//             <td><strong>Order ID:</strong></td>
//             <td>{id}</td>
//           </tr>
//           <tr>
//             <td><strong>Customer Name:</strong></td>
//             <td>{order.customer}</td>
//           </tr>
//           <tr>
//             <td><strong>Customer Contact:</strong></td>
//             <td>{order.contact || "N/A"}</td>
//           </tr>
//           <tr>
//             <td><strong>Product Name:</strong></td>
//             <td>{order.product || "Product XYZ"}</td>
//           </tr>
//           <tr>
//             <td><strong>Status:</strong></td>
//             <td>{order.status}</td>
//           </tr>
//           <tr>
//             <td><strong>Order Date:</strong></td>
//             <td>{order.date}</td>
//           </tr>
//           <tr>
//             <td><strong>Delivered Date:</strong></td>
//             <td>{order.status === "Delivered" ? order.deliveredDate || "N/A" : "Not Delivered Yet"}</td>
//           </tr>
//         </tbody>
//       </table>
//       <button className="back-button" onClick={() => navigate(-1)}>Back to Orders</button>
//     </div>
//   );
// };

// export default View;




import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const View = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Updated order details from navigation state
  const order = location.state?.order || {};

  return (
    <div>
      <h1>Order Details</h1>
      <table border="1">
        <tbody>
          <tr>
            <td><strong>Order ID:</strong></td>
            <td>{id}</td>
          </tr>
          <tr>
            <td><strong>Customer Name:</strong></td>
            <td>{order.customer}</td>
          </tr>
          <tr>
            <td><strong>Customer Contact:</strong></td>
            <td>{order.contact || "N/A"}</td>
          </tr>
          <tr>
            <td><strong>Product Name:</strong></td>
            <td>{order.product || "N/A"}</td>
          </tr>
          <tr>
            <td><strong>Status:</strong></td>
            <td>{order.status}</td>
          </tr>
          <tr>
            <td><strong>Order Date:</strong></td>
            <td>{order.date}</td>
          </tr>
          <tr>
            <td><strong>Delivered Date:</strong></td>
            <td>{order.status === "Delivered" ? order.deliveredDate || "N/A" : "Not Delivered Yet"}</td>
          </tr>
          <tr>
            <td><strong>Amount:</strong></td>
            <td>{order.amount}</td>
          </tr>
          <tr>
            <td><strong>Payment Status:</strong></td>
            <td>{order.payment}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => navigate(-1)}>Back to Orders</button>
    </div>
  );
};

export default View;
