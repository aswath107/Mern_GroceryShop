import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ManageInventory.css";

const UpdateInventory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state;

  // State for the updated product
  const [updatedProduct, setUpdatedProduct] = useState(product);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (
      updatedProduct.addedStock < 0 ||
      updatedProduct.soldStock < 0
    ) {
      alert("Please enter valid stock values.");
      return;
    }

    // Pass the updated product back to ManageInventory
    navigate("/manageinventory", { state: { updatedProduct } });
  };

  return (
    <div className="update-container">
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input type="text" value={updatedProduct.name} readOnly />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" value={updatedProduct.category} readOnly />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={updatedProduct.price} readOnly />
        </div>
        <div>
          <label>Total Stock:</label>
          <input type="number" value={updatedProduct.totalStock} readOnly />
        </div>
        <div>
          <label>Added Stock:</label>
          <input
            type="number"
            value={updatedProduct.addedStock}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, addedStock: parseInt(e.target.value) })
            }
          />
        </div>
        <div>
          <label>Sold Stock:</label>
          <input
            type="number"
            value={updatedProduct.soldStock}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, soldStock: parseInt(e.target.value) })
            }
          />
        </div>
        <button type="submit">Save Changes</button>
        <button type="button" onClick={() => navigate("/manageinventory")}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateInventory;