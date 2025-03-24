// import React, { useState } from "react";
// import "./AddProduct.css";

// const AddProduct = () => {
//   const [product, setProduct] = useState({
//     name: "",
//     description: "",
//     category: "",
//     price: "",
//     unit: "",
//     brand: "",
//     image: null,
//     availability: "In Stock",
//     nutrition: "",
//     ingredients: "",
//     expiryDate: "",
//     allergens: "",
//     origin: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setProduct({ ...product, image: file });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Product Data Submitted:", product);
//     alert("Product added successfully!");
//   };

//   return (
//     <div className="add-product-container">
//       <h1>Add New Product</h1>
//       <form className="product-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Product Name:</label>
//           <input type="text" name="name" value={product.name} onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label>Description:</label>
//           <textarea name="description" value={product.description} onChange={handleChange} required></textarea>
//         </div>

//         <div className="form-group">
//           <label>Category:</label>
//           <select name="category" value={product.category} onChange={handleChange} required>
//             <option value="">Select Category</option>
//             <option value="Fruits">Fruits</option>
//             <option value="Vegetables">Vegetables</option>
//             <option value="Dairy">Dairy</option>
//             <option value="Bakery">Bakery</option>
//             <option value="Beverages">Beverages</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Price ($):</label>
//           <input type="number" name="price" value={product.price} onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label>Unit of Measure:</label>
//           <input type="text" name="unit" value={product.unit} onChange={handleChange} placeholder="e.g., per kg, per piece" required />
//         </div>

//         <div className="form-group">
//           <label>Brand:</label>
//           <input type="text" name="brand" value={product.brand} onChange={handleChange} />
//         </div>

//         <div className="form-group">
//           <label>Product Image:</label>
//           <input type="file" accept="image/*" onChange={handleImageChange} required />
//         </div>

//         <div className="form-group">
//           <label>Availability:</label>
//           <select name="availability" value={product.availability} onChange={handleChange}>
//             <option value="In Stock">In Stock</option>
//             <option value="Out of Stock">Out of Stock</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Nutritional Information:</label>
//           <textarea name="nutrition" value={product.nutrition} onChange={handleChange}></textarea>
//         </div>

//         <div className="form-group">
//           <label>Ingredients:</label>
//           <textarea name="ingredients" value={product.ingredients} onChange={handleChange}></textarea>
//         </div>

//         <div className="form-group">
//           <label>Expiry Date:</label>
//           <input type="date" name="expiryDate" value={product.expiryDate} onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label>Allergen Information:</label>
//           <select name="allergens" value={product.allergens} onChange={handleChange}>
//             <option value="">Select Allergen Info</option>
//             <option value="None">None</option>
//             <option value="Dairy">Dairy</option>
//             <option value="Gluten">Gluten</option>
//             <option value="Nuts">Nuts</option>
//             <option value="Soy">Soy</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Country of Origin:</label>
//           <input type="text" name="origin" value={product.origin} onChange={handleChange} />
//         </div>

//         <button type="submit" className="submit-button">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;


import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    unit: "",
    brand: "",
    image: null,
    availability: "In Stock",
    nutrition: "",
    ingredients: "",
    expiryDate: "",
    allergens: "",
    origin: "",
  });

  const [productList, setProductList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProduct({ ...product, image: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductList([...productList, product]);

    // Reset form
    setProduct({
      name: "",
      description: "",
      category: "",
      price: "",
      unit: "",
      brand: "",
      image: null,
      availability: "In Stock",
      nutrition: "",
      ingredients: "",
      expiryDate: "",
      allergens: "",
      origin: "",
    });
  };

  return (
    <div className="add-product-container">
      <h1>Add New Product</h1>
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label-text">Product Name:</label>
          <input type="text" name="name" className="input-field" value={product.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label className="label-text">Description:</label>
          <textarea name="description" className="textarea-field" value={product.description} onChange={handleChange} required></textarea>
        </div>

        <div className="form-group">
          <label className="label-text">Category:</label>
          <select name="category" className="select-field" value={product.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Beverages">Beverages</option>
          </select>
        </div>

        <div className="form-group">
          <label className="label-text">Price ($):</label>
          <input type="number" name="price" className="input-field" value={product.price} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label className="label-text">Unit of Measure:</label>
          <input type="text" name="unit" className="input-field" value={product.unit} onChange={handleChange} placeholder="e.g., per kg, per piece" required />
        </div>

        <div className="form-group">
          <label className="label-text">Brand:</label>
          <input type="text" name="brand" className="input-field" value={product.brand} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label className="label-text">Product Image:</label>
          <input type="file" className="file-upload" accept="image/*" onChange={handleImageChange} required />
        </div>

        <div className="form-group">
          <label className="label-text">Availability:</label>
          <select name="availability" className="select-field" value={product.availability} onChange={handleChange}>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>

        <div className="form-group">
          <label className="label-text">Nutritional Information:</label>
          <textarea name="nutrition" className="textarea-field" value={product.nutrition} onChange={handleChange}></textarea>
        </div>

        <div className="form-group">
          <label className="label-text">Ingredients:</label>
          <textarea name="ingredients" className="textarea-field" value={product.ingredients} onChange={handleChange}></textarea>
        </div>

        <div className="form-group">
          <label className="label-text">Expiry Date:</label>
          <input type="date" name="expiryDate" className="input-field" value={product.expiryDate} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label className="label-text">Allergen Information:</label>
          <select name="allergens" className="select-field" value={product.allergens} onChange={handleChange}>
            <option value="">Select Allergen Info</option>
            <option value="None">None</option>
            <option value="Dairy">Dairy</option>
            <option value="Gluten">Gluten</option>
            <option value="Nuts">Nuts</option>
            <option value="Soy">Soy</option>
          </select>
        </div>

        <div className="form-group">
          <label className="label-text">Country of Origin:</label>
          <input type="text" name="origin" className="input-field" value={product.origin} onChange={handleChange} />
        </div>

        <button type="submit" className="submit-button">Add Product</button>
      </form>

      <h2>Product List</h2>
      <div className="product-list">
        {productList.map((item, index) => (
          <div className="product-card" key={index}>
            {item.image && <img src={item.image} alt={item.name} className="product-image" />}
            <h3>{item.name}</h3>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <p><strong>Unit:</strong> {item.unit}</p>
            <p><strong>Brand:</strong> {item.brand}</p>
            <p><strong>Availability:</strong> {item.availability}</p>
            <p><strong>Expiry Date:</strong> {item.expiryDate}</p>
            <p><strong>Allergens:</strong> {item.allergens}</p>
            <p><strong>Country of Origin:</strong> {item.origin}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddProduct;
