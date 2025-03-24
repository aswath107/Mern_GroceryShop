import React, { useState, useEffect } from "react";
import "./HerbsAndSpicesPage.css";

const DairyAndEggsPage = () => {
  // Sample products for the Dairy & Eggs category
  const dairyAndEggsProducts = [
    { id: 1, image: "/de1.webp", title: "Fresh Cow Milk 1L", price: 60, saleDuration: 2 * 60 * 60 }, // 2 hours
    { id: 2, image: "/de2.jpg", title: "Cheddar Cheese 500g", price: 350 },
    { id: 3, image: "/de3.jpg", title: "Organic Butter 250g", price: 200, saleDuration: 7 * 24 * 60 * 60 }, // 1 week
    { id: 4, image: "/de4.jpg", title: "Farm Fresh Eggs (12 pcs)", price: 180 },
    { id: 5, image: "/de5.jpg", title: "Paneer 500g", price: 250, saleDuration: 30 * 24 * 60 * 60 }, // 1 month
    { id: 6, image: "/de6.jpg", title: "Greek Yogurt 400g", price: 150 },
    { id: 7, image: "/de7.webp", title: "Fresh Cream 250ml", price: 120, saleDuration: 2 * 60 * 60 }, // 2 hours
    { id: 8, image: "/de8.webp", title: "Pure Ghee 500ml", price: 500 },
    { id: 9, image: "/de9.webp", title: "Mozzarella Cheese 500g", price: 380 },
    { id: 10, image: "/de10.jpg", title: "Homemade Curd 1kg", price: 90 },
  ];

  const dairyAndEggsCombos = [
    {
      id: 101,
      image: "combo1.jpg",
      title: "Breakfast Essentials Combo (4 Pack)",
      items: ["Fresh Cow Milk", "Organic Butter", "Farm Fresh Eggs", "Greek Yogurt"],
      price: 700,
      originalPrice: 790,
      saleDuration: 3 * 24 * 60 * 60 // 3 days
    },
    {
      id: 102,
      image: "combo2.jpg",
      title: "Cheese Lover's Combo (3 Pack)",
      items: ["Cheddar Cheese", "Mozzarella Cheese", "Paneer"],
      price: 850,
      originalPrice: 980,
      saleDuration: 7 * 24 * 60 * 60 // 1 week
    },
  ];

  // Dairy & Eggs family packs (bulk purchase with a bigger discount)
  const dairyAndEggsFamilyPacks = [
    {
      id: 201,
      image: "family-pack1.jpg",
      title: "Fresh Cow Milk - Family Pack (5 x 1L)",
      price: 250,
      originalPrice: 300,
      saleDuration: 7 * 24 * 60 * 60 // 1 week
    },
    {
      id: 202,
      image: "family-pack2.jpg",
      title: "Farm Fresh Eggs - Family Pack (3 x 12 pcs)",
      price: 450,
      originalPrice: 540,
      saleDuration: 14 * 24 * 60 * 60 // 2 weeks
    },
    {
      id: 203,
      image: "family-pack3.jpg",
      title: "Dairy Essentials - Family Pack (2 each)",
      price: 850,
      originalPrice: 980,
      saleDuration: 14 * 24 * 60 * 60 // 2 weeks
    },
  ];

  // Track sale timers for individual, combo, and family packs
  const [timers, setTimers] = useState(() => {
    const initialTimers = {};
    [...dairyAndEggsProducts, ...dairyAndEggsCombos, ...dairyAndEggsFamilyPacks].forEach((product) => {
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
    <div className="dairy-and-eggs-page">
      <h1>Dairy & Eggs</h1>
      <p className="page-description">
        Discover our fresh dairy products and farm eggs. Perfect for a healthy and delicious lifestyle!
      </p>

      {/* Individual Products */}
      <h2>Dairy & Eggs Products</h2>
      <div className="product-grid">
        {dairyAndEggsProducts.map((product) => (
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
        {dairyAndEggsCombos.map((combo) => (
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
        {dairyAndEggsFamilyPacks.map((pack) => (
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

export default DairyAndEggsPage;
