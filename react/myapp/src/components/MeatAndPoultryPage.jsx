import React, { useState, useEffect } from "react";
import "./HerbsAndSpicesPage.css";  // Add styles for this page

const MeatAndPoultryPage = () => {
  // Sample products for the Meat & Poultry category
  const meatAndPoultryProducts = [
    { id: 1, image: "chicken-breast.jpg", title: "Chicken Breast 1kg", price: 350, saleDuration: 2 * 60 * 60 }, // 2 hours
    { id: 2, image: "mutton.jpg", title: "Fresh Mutton 1kg", price: 900 },
    { id: 3, image: "chicken-drumsticks.jpg", title: "Chicken Drumsticks 500g", price: 250, saleDuration: 7 * 24 * 60 * 60 }, // 1 week
    { id: 4, image: "fish.jpg", title: "Fresh Fish 1kg", price: 700 },
    { id: 5, image: "prawns.jpg", title: "Prawns 500g", price: 600, saleDuration: 30 * 24 * 60 * 60 }, // 1 month
    { id: 6, image: "turkey.jpg", title: "Turkey 2kg", price: 1200 },
    { id: 7, image: "beef.jpg", title: "Beef Steak 1kg", price: 800, saleDuration: 2 * 60 * 60 }, // 2 hours
    { id: 8, image: "duck.jpg", title: "Duck Meat 1kg", price: 750 },
    { id: 9, image: "salmon.jpg", title: "Salmon Fillet 500g", price: 900 },
    { id: 10, image: "quail.jpg", title: "Quail Meat 500g", price: 500 },
  ];

  // Track individual sale timers for each product
  const [timers, setTimers] = useState(() => {
    return meatAndPoultryProducts.reduce((acc, product) => {
      if (product.saleDuration) {
        acc[product.id] = product.saleDuration; // Store time in seconds
      }
      return acc;
    }, {});
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) => {
        const updatedTimers = { ...prevTimers };
        Object.keys(updatedTimers).forEach((id) => {
          if (updatedTimers[id] > 0) {
            updatedTimers[id] -= 1;
          }
        });
        return updatedTimers;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert seconds to HH:MM:SS format
  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (days > 0) return `${days}d ${hours}h ${minutes}m`;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="meat-and-poultry-page">
      <h1>Meat & Poultry</h1>
      <p className="page-description">
        Discover fresh and high-quality meat and poultry products for delicious meals!
      </p>

      <div className="product-grid">
        {meatAndPoultryProducts.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <div className="product-price">₹{product.price}</div>

            {/* Show sale timer ONLY for products with a sale */}
            {product.saleDuration && timers[product.id] > 0 && (
              <div className="sale-banner">
                <h4>🔥 Limited Time Sale! 🔥</h4>
                <p>Offer ends in: <span className="timer">{formatTime(timers[product.id])}</span></p>
              </div>
            )}

            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeatAndPoultryPage;
