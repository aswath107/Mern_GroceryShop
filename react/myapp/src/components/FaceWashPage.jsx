import React, { useState, useEffect } from "react";
import "./HerbsAndSpicesPage.css";

const FaceWashPage = () => {
  // Individual face wash products
  const faceWashProducts = [
    { id: 1, image: "himalaya-facewash.jpg", title: "Himalaya Neem Face Wash 150ml", price: 180, saleDuration: 2 * 60 * 60 }, // 2 hours
    { id: 2, image: "nivea-facewash.jpg", title: "Nivea Men Face Wash 100ml", price: 220 },
    { id: 3, image: "ponds-facewash.jpg", title: "Pond's Bright Beauty Face Wash 150ml", price: 250, saleDuration: 7 * 24 * 60 * 60 }, // 1 week
    { id: 4, image: "garnier-facewash.jpg", title: "Garnier Bright Complete Face Wash 200ml", price: 270 },
    { id: 5, image: "mamaearth-facewash.jpg", title: "Mamaearth Ubtan Face Wash 100ml", price: 300, saleDuration: 30 * 24 * 60 * 60 }, // 1 month
  ];

  // Combo offers (multiple face wash varieties in a single pack)
  const faceWashCombos = [
    { 
      id: 101, 
      image: "combo1.jpg", 
      title: "Glow & Fresh Combo (3 Pack)", 
      items: ["Himalaya Neem", "Pond's Bright Beauty", "Garnier Bright"], 
      price: 650, 
      originalPrice: 700, 
      saleDuration: 3 * 24 * 60 * 60 // 3 days
    },
    { 
      id: 102, 
      image: "combo2.jpg", 
      title: "Ultimate Skincare Pack (5 Pack)", 
      items: ["Himalaya Neem", "Nivea Men", "Pond's Bright", "Mamaearth Ubtan", "Garnier Bright"], 
      price: 1200, 
      originalPrice: 1350, 
      saleDuration: 7 * 24 * 60 * 60 // 1 week
    },
  ];

  // Family packs (bulk purchase with a bigger discount)
  const faceWashFamilyPacks = [
    { 
      id: 201, 
      image: "family-pack1.jpg", 
      title: "Himalaya Neem Face Wash - Family Pack (5 x 150ml)", 
      price: 850, 
      originalPrice: 900, 
      saleDuration: 7 * 24 * 60 * 60 // 1 week
    },
    { 
      id: 202, 
      image: "family-pack2.jpg", 
      title: "Pond's Bright Beauty - Family Pack (5 x 150ml)", 
      price: 1100, 
      originalPrice: 1250, 
      saleDuration: 14 * 24 * 60 * 60 // 2 weeks
    },
    { 
      id: 203, 
      image: "family-pack3.jpg", 
      title: "Nivea & Garnier Face Wash - Family Pack (3 each)", 
      price: 1600, 
      originalPrice: 1800, 
      saleDuration: 14 * 24 * 60 * 60 // 2 weeks
    },
  ];

  // Track sale timers for individual, combo, and family packs
  const [timers, setTimers] = useState(() => {
    const initialTimers = {};
    [...faceWashProducts, ...faceWashCombos, ...faceWashFamilyPacks].forEach((product) => {
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
    <div className="face-wash-page">
      <h1>Face Wash Collection</h1>
      <p className="page-description">
        Keep your skin fresh and clean with our wide range of face washes from top brands!
      </p>

      {/* Individual Products */}
      <h2>Single Face Wash Items</h2>
      <div className="product-grid">
        {faceWashProducts.map((product) => (
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
        {faceWashCombos.map((combo) => (
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
        {faceWashFamilyPacks.map((pack) => (
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

export default FaceWashPage;