import React, { useState, useEffect } from "react";
import "./HerbsAndSpicesPage.css";

const BeveragesPage = () => {
  // Sample products for the Beverages category
  const beveragesProducts = [
    { id: 1, image: "coffee.jpg", title: "Premium Coffee 500g", price: 450, saleDuration: 2 * 60 * 60 }, // 2 hours
    { id: 2, image: "green-tea.jpg", title: "Green Tea 250g", price: 300 },
    { id: 3, image: "orange-juice.jpg", title: "Fresh Orange Juice 1L", price: 180, saleDuration: 7 * 24 * 60 * 60 }, // 1 week
    { id: 4, image: "milkshake.jpg", title: "Chocolate Milkshake 500ml", price: 150 },
    { id: 5, image: "soft-drink.jpg", title: "Soft Drink 1.5L", price: 90, saleDuration: 30 * 24 * 60 * 60 }, // 1 month
    { id: 6, image: "energy-drink.jpg", title: "Energy Drink 500ml", price: 200 },
    { id: 7, image: "black-tea.jpg", title: "Black Tea 250g", price: 250, saleDuration: 2 * 60 * 60 }, // 2 hours
    { id: 8, image: "lemonade.jpg", title: "Lemonade 1L", price: 100 },
    { id: 9, image: "mango-juice.jpg", title: "Mango Juice 1L", price: 160 },
    { id: 10, image: "sparkling-water.jpg", title: "Sparkling Water 750ml", price: 80 },
  ];

  // Beverages combos (multiple products in a single pack)
  const beveragesCombos = [
    {
      id: 101,
      image: "combo1.jpg",
      title: "Refreshing Combo (4 Pack)",
      items: ["Fresh Orange Juice", "Mango Juice", "Lemonade", "Sparkling Water"],
      price: 550,
      originalPrice: 620,
      saleDuration: 3 * 24 * 60 * 60 // 3 days
    },
    {
      id: 102,
      image: "combo2.jpg",
      title: "Caffeine Boost Combo (3 Pack)",
      items: ["Premium Coffee", "Green Tea", "Black Tea"],
      price: 900,
      originalPrice: 1000,
      saleDuration: 7 * 24 * 60 * 60 // 1 week
    },
  ];

  // Beverages family packs (bulk purchase with a bigger discount)
  const beveragesFamilyPacks = [
    {
      id: 201,
      image: "family-pack1.jpg",
      title: "Premium Coffee - Family Pack (5 x 500g)",
      price: 1900,
      originalPrice: 2250,
      saleDuration: 7 * 24 * 60 * 60 // 1 week
    },
    {
      id: 202,
      image: "family-pack2.jpg",
      title: "Soft Drink - Family Pack (6 x 1.5L)",
      price: 450,
      originalPrice: 540,
      saleDuration: 14 * 24 * 60 * 60 // 2 weeks
    },
    {
      id: 203,
      image: "family-pack3.jpg",
      title: "Beverage Essentials - Family Pack (3 each)",
      price: 1200,
      originalPrice: 1400,
      saleDuration: 14 * 24 * 60 * 60 // 2 weeks
    },
  ];

  // Track sale timers for individual, combo, and family packs
  const [timers, setTimers] = useState(() => {
    const initialTimers = {};
    [...beveragesProducts, ...beveragesCombos, ...beveragesFamilyPacks].forEach((product) => {
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
    <div className="beverages-page">
      <h1>Beverages</h1>
      <p className="page-description">
        Refresh yourself with our premium collection of beverages, from fresh juices to energy drinks!
      </p>

      {/* Individual Products */}
      <h2>Beverages Products</h2>
      <div className="product-grid">
        {beveragesProducts.map((product) => (
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
        {beveragesCombos.map((combo) => (
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
        {beveragesFamilyPacks.map((pack) => (
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

export default BeveragesPage;
