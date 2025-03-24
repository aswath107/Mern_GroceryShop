import React, { useState, useEffect } from "react";
import "./HerbsAndSpicesPage.css";

const HerbsAndSpicesPage = () => {
  // Sample products for the Herbs & Spices category
  const herbsAndSpicesProducts = [
    { id: 1, image: "/hs1.jpg", title: "Black Pepper 500g", price: 540, saleDuration: 1 * 60 * 60 }, // 1 hour
    { id: 2, image: "/hp2.jpg", title: "Turmeric Powder 200g", price: 120 },
    { id: 3, image: "/hs3.jpg", title: "Cinnamon Sticks 100g", price: 200, saleDuration: 7 * 24 * 60 * 60 }, // 1 week
    { id: 4, image: "/hs4.jpg", title: "Cumin Seeds 250g", price: 150 },
    { id: 5, image: "/hs5.jpg", title: "Green Cardamom 100g", price: 300, saleDuration: 30 * 24 * 60 * 60 }, // 1 month
    { id: 6, image: "/hs6.jpg", title: "Cloves 100g", price: 250 },
    { id: 7, image: "/hs7.jpg", title: "Coriander Seeds 500g", price: 180, saleDuration: 1 * 60 * 60 }, // 1 hour
    { id: 8, image: "/hs8.jpg", title: "Mustard Seeds 250g", price: 100 },
    { id: 9, image: "/hs9.webp", title: "Fenugreek Seeds 200g", price: 90 },
    { id: 10, image: "/hs10.webp", title: "Chili Powder 100g", price: 80 },
  ];

  // Herbs & Spices combos (multiple products in a single pack)
  const herbsAndSpicesCombos = [
    {
      id: 101,
      image: "/hscombo1.webp",
      title: "Spice Lover's Combo (4 Pack)",
      items: ["Black Pepper", "Turmeric Powder", "Cinnamon Sticks", "Cumin Seeds"],
      price: 900,
      originalPrice: 1010,
      saleDuration: 3 * 24 * 60 * 60 // 3 days
    },
    {
      id: 102,
      image: "/hscombo2.jpg",
      title: "Gourmet Herbs Combo (3 Pack)",
      items: ["Coriander Seeds", "Fenugreek Seeds", "Chili Powder"],
      price: 450,
      originalPrice: 520,
      saleDuration: 7 * 24 * 60 * 60 // 1 week
    },
  ];

  // Herbs & Spices family packs (bulk purchase with a bigger discount)
  const herbsAndSpicesFamilyPacks = [
    {
      id: 201,
      image: "/hsfam1.jpg",
      title: "Black Pepper - Family Pack (5 x 500g)",
      price: 2100,
      originalPrice: 2700,
      saleDuration: 7 * 24 * 60 * 60 // 1 week
    },
    {
      id: 202,
      image: "/hsfam2.webp",
      title: "Turmeric Powder - Family Pack (6 x 200g)",
      price: 600,
      originalPrice: 720,
      saleDuration: 14 * 24 * 60 * 60 // 2 weeks
    },
    {
      id: 203,
      image: "/hsfam3.jpg",
      title: "Herbs & Spices Essentials - Family Pack (5 each)",
      price: 1050,
      originalPrice: 1200,
      saleDuration: 14 * 24 * 60 * 60 // 2 weeks
    },
  ];

  // Track sale timers for individual, combo, and family packs
  const [timers, setTimers] = useState(() => {
    const initialTimers = {};
    [...herbsAndSpicesProducts, ...herbsAndSpicesCombos, ...herbsAndSpicesFamilyPacks].forEach((product) => {
      if (product.saleDuration) {
        initialTimers[product.id] = product.saleDuration;
      }
    });
    return initialTimers;
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

  // Convert seconds to readable format
  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (days > 0) return `${days}d ${hours}h ${minutes}m`;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="herbs-and-spices-page">
      <h1>Herbs & Spices</h1>
      <p className="page-description">
        Explore our premium collection of herbs and spices. Add flavor and aroma to your dishes with our high-quality products!
      </p>

      {/* Individual Products */}
      <h2>Herbs & Spices Products</h2>
      <div className="product-grid">
        {herbsAndSpicesProducts.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <div className="product-price">₹{product.price}</div>

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

      {/* Combo Offers */}
      <h2>Combo Offers - Save More!</h2>
      <div className="combo-grid">
        {herbsAndSpicesCombos.map((combo) => (
          <div className="combo-item" key={combo.id}>
            <img src={combo.image} alt={combo.title} className="combo-image" />
            <h3 className="combo-title">{combo.title}</h3>
            <p className="combo-items">Includes: {combo.items.join(", ")}</p>
            <div className="combo-price">
              <span className="original-price">₹{combo.originalPrice}</span>
              <span className="discounted-price">₹{combo.price}</span>
            </div>

            {combo.saleDuration && timers[combo.id] > 0 && (
              <div className="sale-banner">
                <h4>🔥 Limited Time Combo Offer! 🔥</h4>
                <p>Offer ends in: <span className="timer">{formatTime(timers[combo.id])}</span></p>
              </div>
            )}

            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Family Packs */}
      <h2>Family Packs - Best Value Deals!</h2>
      <div className="combo-grid">
        {herbsAndSpicesFamilyPacks.map((pack) => (
          <div className="combo-item" key={pack.id}>
            <img src={pack.image} alt={pack.title} className="combo-image" />
            <h3 className="combo-title">{pack.title}</h3>
            <div className="combo-price">
              <span className="original-price">₹{pack.originalPrice}</span>
              <span className="discounted-price">₹{pack.price}</span>
            </div>

            {pack.saleDuration && timers[pack.id] > 0 && (
              <div className="sale-banner">
                <h4>🔥 Limited Time Family Pack Offer! 🔥</h4>
                <p>Offer ends in: <span className="timer">{formatTime(timers[pack.id])}</span></p>
              </div>
            )}

            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HerbsAndSpicesPage;
