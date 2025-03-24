// import React, { useState } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import "./UpdateOrder.css";

// const UpdateOrder = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Get order data and update function from ManageOrders
//   const orderData = location.state?.order || {};
//   const handleOrderUpdate = location.state?.handleOrderUpdate;

//   const [order, setOrder] = useState(orderData);

//   const handleChange = (e) => {
//     setOrder({ ...order, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Call the function to update the order in ManageOrders
//     if (handleOrderUpdate) {
//       handleOrderUpdate(order);
//     }

//     alert("Order Updated Successfully!");
//     navigate(`/view/${order.id}`, { state: { order } }); // Redirect to View Page
//   };

//   return (
//     <div className="update-order-container">
//       <h1>Update Order</h1>
//       <form className="update-order-form" onSubmit={handleSubmit}>
//         <label>
//           Customer Name:
//           <input type="text" name="customer" value={order.customer} onChange={handleChange} required />
//         </label>

//         <label>
//           Contact Number:
//           <input type="text" name="contact" value={order.contact} onChange={handleChange} required />
//         </label>

//         <label>
//           Product Name:
//           <input type="text" name="product" value={order.product} onChange={handleChange} required />
//         </label>

//         <label>
//           Status:
//           <select name="status" value={order.status} onChange={handleChange} required>
//             <option value="Pending">Pending</option>
//             <option value="Shipped">Shipped</option>
//             <option value="Delivered">Delivered</option>
//           </select>
//         </label>

//         <button type="submit">Update Order</button>
//       </form>

//       <button className="back-button" onClick={() => navigate(-1)}>Back</button>
//     </div>
//   );
// };

// export default UpdateOrder;
import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./UpdateOrder.css";

const UpdateOrder = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const orderData = location.state?.order || {};
  const updateOrder = location.state?.updateOrder;
  
  const [order, setOrder] = useState(orderData);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Updated Successfully!");

    if (updateOrder) {
      updateOrder(order);
    }

    navigate(`/view/${id}`, { state: { order } });
  };

  return (
    <div className="update-order-container">
      <h1>Update Order</h1>
      <form className="update-order-form" onSubmit={handleSubmit}>
        <label>
          Customer Name:
          <input type="text" name="customer" value={order.customer} onChange={handleChange} required />
        </label>
        
        <label>
          Contact Number:
          <input type="text" name="contact" value={order.contact} onChange={handleChange} required />
        </label>

        <label>
          Product Name:
          <input type="text" name="product" value={order.product} onChange={handleChange} required />
        </label>

        <label>
          Order Status:
          <select name="status" value={order.status} onChange={handleChange} required>
            <option value="Pending">Pending</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </label>

        <label>
          Order Date:
          <input type="date" name="date" value={order.date} onChange={handleChange} required />
        </label>

        {order.status === "Delivered" && (
          <label>
            Delivered Date:
            <input type="date" name="deliveredDate" value={order.deliveredDate || ""} onChange={handleChange} />
          </label>
        )}

        <label>
          Amount:
          <input type="text" name="amount" value={order.amount} onChange={handleChange} required />
        </label>

        <label>
          Payment Status:
          <select name="payment" value={order.payment} onChange={handleChange} required>
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
          </select>
        </label>

        <div className="button-group">
          <button type="submit" className="submit-button">Update Order</button>
          <button type="button" className="cancel-button" onClick={() => navigate(-1)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateOrder;
