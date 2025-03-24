import React, { useState, useEffect } from "react";
import "./HerbsAndSpicesPage.css"; 

const BodyWashPage = () => {
  // Sample products for the Body Wash category
  const bodyWashProducts = [
    { id: 1, image: "dove-bodywash.jpg", title: "Dove Body Wash 500ml", price: 350, saleDuration: 2 * 60 * 60 }, // 2 hours
    { id: 2, image: "nivea-bodywash.jpg", title: "Nivea Body Wash 250ml", price: 250 },
    { id: 3, image: "palmolive-bodywash.jpg", title: "Palmolive Body Wash 300ml", price: 270, saleDuration: 7 * 24 * 60 * 60 }, // 1 week
    { id: 4, image: "himalaya-bodywash.jpg", title: "Himalaya Herbal Body Wash 400ml", price: 320 },
    { id: 5, image: "st-ives-bodywash.jpg", title: "St. Ives Exfoliating Body Wash 650ml", price: 450, saleDuration: 30 * 24 * 60 * 60 }, // 1 month
    { id: 6, image: "biotique-bodywash.jpg", title: "Biotique Refreshing Body Wash 200ml", price: 180 },
    { id: 7, image: "pears-bodywash.jpg", title: "Pears Pure & Gentle Body Wash 250ml", price: 200, saleDuration: 2 * 60 * 60 }, // 2 hours
    { id: 8, image: "mamaearth-bodywash.jpg", title: "Mamaearth Vitamin C Body Wash 300ml", price: 350 },
    { id: 9, image: "fiama-bodywash.jpg", title: "Fiama Gel Body Wash 250ml", price: 220 },
    { id: 10, image: "lux-bodywash.jpg", title: "Lux Velvet Touch Body Wash 500ml", price: 400 },
  ];

  // Track individual sale timers for each product
  const [timers, setTimers] = useState(() => {
    return bodyWashProducts.reduce((acc, product) => {
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
    <div className="body-wash-page">
      <h1>Body Wash Collection</h1>
      <p className="page-description">
        Refresh your skin with our wide range of body washes. Choose from the best brands at the best prices!
      </p>

      <div className="product-grid">
        {bodyWashProducts.map((product) => (
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

export default BodyWashPage;
