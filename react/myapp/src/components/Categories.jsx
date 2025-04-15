import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./shop.css";

const Categories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all"); // State to track selected category
  const navigate = useNavigate();

  const exploreItems = [
    { image: "spice.jpg", title: "Herbs & Spices", path: "/herbs-spices" },
    { image: "dairy.jpg", title: "Dairy & Eggs", path: "/dairy-eggs" },
    { image: "meat.jpg", title: "Meat & Poultry", path: "/meat-poultry" },
    { image: "beverge.jpeg", title: "Beverages", path: "/beverages" },
    { image: "detergent.jpg", title: "Detergent", path: "/detergent" },
    { image: "frozen.jpeg", title: "Frozen Foods", path: "/frozen-foods" },
    { image: "canned.jpg", title: "Canned Goods", path: "/canned-goods" },
    { image: "soap.jpg", title: "Body Wash", path: "/body-wash" },
    { image: "face.jpeg", title: "Face Wash", path: "/face-wash" },
  ];

  const products = [
    { id: 1, image: "pepper.jpg", title: "Pepper 500g", price: 540, category: "herbs-spices" },
    { id: 2, image: "broccoli.jpg", title: "Broccoli 1kg", price: 220, category: "meat-poultry" },
    { id: 3, image: "tedibar.jpg", title: "TediBar Soap", price: 185, category: "body-wash" },
    { id: 4, image: "curry.jpg", title: "Cherry 500gm", price: 440, category: "herbs-spices" },
    { id: 5, image: "fwash1.jpg", title: "Oxy 99 Face wash", price: 99, category: "face-wash" },
    { id: 6, image: "amulche.jpg", title: "Amul Diced cheese 1kg", price: 99, category: "dairy-eggs" },
  ];

  const itemsPerPage = 4;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? exploreItems.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= exploreItems.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const currentItems = exploreItems.slice(currentIndex, currentIndex + itemsPerPage);

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Update selected category
  };

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="aesthetic-shop">
      <div className="categories-and-explore">
        <div className="categories">
          <h2 className="categories-title">Categories</h2>
          <ul className="categories-list">
            <li>
              <input
                type="radio"
                name="category"
                id="all"
                checked={selectedCategory === "all"}
                onChange={() => handleCategoryChange("all")}
              />
              <label htmlFor="all">All</label>
            </li>
            <li>
              <input
                type="radio"
                name="category"
                id="herbs-spices"
                checked={selectedCategory === "herbs-spices"}
                onChange={() => handleCategoryChange("herbs-spices")}
              />
              <label htmlFor="herbs-spices">Herbs & Spices</label>
            </li>
            <li>
              <input
                type="radio"
                name="category"
                id="dairy-eggs"
                checked={selectedCategory === "dairy-eggs"}
                onChange={() => handleCategoryChange("dairy-eggs")}
              />
              <label htmlFor="dairy-eggs">Dairy & Eggs</label>
            </li>
            <li>
              <input
                type="radio"
                name="category"
                id="meat-poultry"
                checked={selectedCategory === "meat-poultry"}
                onChange={() => handleCategoryChange("meat-poultry")}
              />
              <label htmlFor="meat-poultry">Meat & Poultry</label>
            </li>
            <li>
              <input
                type="radio"
                name="category"
                id="beverages"
                checked={selectedCategory === "beverages"}
                onChange={() => handleCategoryChange("beverages")}
              />
              <label htmlFor="beverages">Beverages</label>
            </li>
            <li>
              <input
                type="radio"
                name="category"
                id="detergent"
                checked={selectedCategory === "detergent"}
                onChange={() => handleCategoryChange("detergent")}
              />
              <label htmlFor="detergent">Detergent</label>
            </li>
            <li>
              <input
                type="radio"
                name="category"
                id="frozen-foods"
                checked={selectedCategory === "frozen-foods"}
                onChange={() => handleCategoryChange("frozen-foods")}
              />
              <label htmlFor="frozen-foods">Frozen Foods</label>
            </li>
            <li>
              <input
                type="radio"
                name="category"
                id="canned-goods"
                checked={selectedCategory === "canned-goods"}
                onChange={() => handleCategoryChange("canned-goods")}
              />
              <label htmlFor="canned-goods">Canned Goods</label>
            </li>
            <li>
              <input
                type="radio"
                name="category"
                id="body-wash"
                checked={selectedCategory === "body-wash"}
                onChange={() => handleCategoryChange("body-wash")}
              />
              <label htmlFor="body-wash">Body wash</label>
            </li>
            <li>
              <input
                type="radio"
                name="category"
                id="face-wash"
                checked={selectedCategory === "face-wash"}
                onChange={() => handleCategoryChange("face-wash")}
              />
              <label htmlFor="face-wash">Face wash</label>
            </li>
          </ul>
        </div>

        <div className="explore-categories">
          <h2 className="explore-title">Explore Categories</h2>
          <div className="explore-grid">
            <button className="explore-prev" onClick={handlePrevClick}>
              &lt;
            </button>
            <div className="explore-items">
              {currentItems.map((item, index) => (
                <div
                  className="explore-item"
                  key={index}
                  onClick={() => item.path && navigate(item.path)}
                >
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
            <button className="explore-next" onClick={handleNextClick}>
              &gt;
            </button>
          </div>
        </div>
      </div>

      <div className="products">
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-item" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <div className="price">₹{product.price}</div>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;





