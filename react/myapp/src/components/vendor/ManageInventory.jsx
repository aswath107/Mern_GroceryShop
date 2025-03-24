import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./ManageInventory.css";

const ManageInventory = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Sample Inventory Data
  const [inventory, setInventory] = useState([
    { id: 1, name: "Apples", category: "Fruits", price: 2.5, totalStock: 100, addedStock: 20, soldStock: 30 },
    { id: 2, name: "Milk", category: "Dairy", price: 1.8, totalStock: 50, addedStock: 10, soldStock: 25 },
    { id: 3, name: "Bread", category: "Bakery", price: 3.2, totalStock: 40, addedStock: 5, soldStock: 15 },
  ]);

  // State for adding a new product
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: 0,
    totalStock: 0,
  });

  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Predefined categories
  const categories = ["Fruits", "Dairy", "Bakery", "Vegetables", "Beverages"];

  // Function to calculate current stock
  const calculateCurrentStock = (product) => product.totalStock + product.addedStock - product.soldStock;

  // Function to handle adding a new product
  const handleAddProduct = () => {
    if (
      !newProduct.name ||
      !newProduct.category ||
      newProduct.price <= 0 ||
      newProduct.totalStock < 0
    ) {
      alert("Please fill in all fields with valid data.");
      return;
    }

    const productToAdd = {
      ...newProduct,
      id: inventory.length + 1, // Simple ID generation (not ideal for production)
      addedStock: 0, // Default added stock
      soldStock: 0, // Default sold stock
    };

    setInventory((prevInventory) => [...prevInventory, productToAdd]);
    setNewProduct({
      name: "",
      category: "",
      price: 0,
      totalStock: 0,
    });
    setIsModalOpen(false); // Close the modal after adding
    alert("Product added successfully!");
  };

  // Function to delete a product
  const handleDelete = (id) => {
    setInventory((prevInventory) => prevInventory.filter((product) => product.id !== id));
    alert("Product deleted successfully!");
  };

  // Function to handle updating a product
  const handleUpdate = (updatedProduct) => {
    setInventory((prevInventory) =>
      prevInventory.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
    );
    alert("Product updated successfully!");
  };

  // Function to navigate to the update page with product data
  const navigateToUpdate = (product) => {
    navigate(`/updateinventory/${product.id}`, { state: { product } });
  };

  // Use effect to check for updated product in location state
  useEffect(() => {
    if (location.state?.updatedProduct) {
      handleUpdate(location.state.updatedProduct);
    }
  }, [location.state]);

  return (
    <div className="inventory-container">
      <h1 className="inventory-title">Manage Inventory</h1>

      {/* Button to open the Add Product Modal */}
      <button className="action-button add" onClick={() => setIsModalOpen(true)}>
        Add New Product
      </button>

      {/* Add New Product Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add New Product</h2>
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <select
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            >
              <option value="">Select Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Price ($)"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
            />
            <input
              type="number"
              placeholder="Total Stock"
              value={newProduct.totalStock}
              onChange={(e) => setNewProduct({ ...newProduct, totalStock: parseInt(e.target.value) })}
            />
            <div className="modal-actions">
              <button className="action-button cancel" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button className="action-button save" onClick={handleAddProduct}>
                Save Product
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Inventory Table */}
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price ($)</th>
            <th>Total Stock</th>
            <th>Added Stock</th>
            <th>Sold Stock</th>
            <th>Current Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price.toFixed(2)}</td>
              <td>{product.totalStock}</td>
              <td>{product.addedStock}</td>
              <td>{product.soldStock}</td>
              <td>{calculateCurrentStock(product)}</td>
              <td>
                <button
                  className="action-button update"
                  onClick={() => navigateToUpdate(product)}
                >
                  Update
                </button>
                <button
                  className="action-button delete"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageInventory;