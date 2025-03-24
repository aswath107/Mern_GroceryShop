import React, { useState, useEffect } from "react";
import "./HerbsAndSpicesPage.css";

const DetergentPage = () => {
  // Sample products for the Detergent category
  const detergentProducts = [
    { id: 1, image: "washing-powder.jpg", title: "Washing Powder 1kg", price: 250, saleDuration: 2 * 60 * 60 }, // 2 hours
    { id: 2, image: "liquid-detergent.jpg", title: "Liquid Detergent 500ml", price: 180 },
    { id: 3, image: "fabric-softener.jpg", title: "Fabric Softener 1L", price: 220, saleDuration: 7 * 24 * 60 * 60 }, // 1 week
    { id: 4, image: "stain-remover.jpg", title: "Stain Remover 500ml", price: 200 },
    { id: 5, image: "detergent-bar.jpg", title: "Detergent Bar 200g", price: 90, saleDuration: 30 * 24 * 60 * 60 }, // 1 month
    { id: 6, image: "dishwasher-liquid.jpg", title: "Dishwasher Liquid 1L", price: 300 },
    { id: 7, image: "laundry-sanitizer.jpg", title: "Laundry Sanitizer 500ml", price: 250, saleDuration: 2 * 60 * 60 }, // 2 hours
    { id: 8, image: "floor-cleaner.jpg", title: "Floor Cleaner 1L", price: 160 },
    { id: 9, image: "toilet-cleaner.jpg", title: "Toilet Cleaner 500ml", price: 140 },
    { id: 10, image: "multi-surface-cleaner.jpg", title: "Multi-Surface Cleaner 750ml", price: 200 },
  ];

  // Detergent combos (multiple products in a single pack)
  const detergentCombos = [
    {
      id: 101,
      image: "combo1.jpg",
      title: "Cleaning Essentials Combo (3 Pack)",
      items: ["Washing Powder", "Fabric Softener", "Stain Remover"],
      price: 600,
      originalPrice: 670,
      saleDuration: 3 * 24 * 60 * 60 // 3 days
    },
    {
      id: 102,
      image: "combo2.jpg",
      title: "Ultimate Cleaning Set (5 Pack)",
      items: ["Washing Powder", "Liquid Detergent", "Fabric Softener", "Laundry Sanitizer", "Floor Cleaner"],
      price: 1100,
      originalPrice: 1250,
      saleDuration: 7 * 24 * 60 * 60 // 1 week
    },
  ];

  // Detergent family packs (bulk purchase with a bigger discount)
  const detergentFamilyPacks = [
    {
      id: 201,
      image: "family-pack1.jpg",
      title: "Washing Powder - Family Pack (5 x 1kg)",
      price: 1100,
      originalPrice: 1250,
      saleDuration: 7 * 24 * 60 * 60 // 1 week
    },
    {
      id: 202,
      image: "family-pack2.jpg",
      title: "Fabric Softener - Family Pack (5 x 1L)",
      price: 950,
      originalPrice: 1100,
      saleDuration: 14 * 24 * 60 * 60 // 2 weeks
    },
    {
      id: 203,
      image: "family-pack3.jpg",
      title: "Cleaning Essentials - Family Pack (3 each)",
      price: 1400,
      originalPrice: 1600,
      saleDuration: 14 * 24 * 60 * 60 // 2 weeks
    },
  ];

  // Track sale timers for individual, combo, and family packs
  const [timers, setTimers] = useState(() => {
    const initialTimers = {};
    [...detergentProducts, ...detergentCombos, ...detergentFamilyPacks].forEach((product) => {
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
    <div className="detergent-page">
      <h1>Detergents & Cleaning Supplies</h1>
      <p className="page-description">
        Keep your home clean and fresh with our range of high-quality detergents and cleaning products!
      </p>

      {/* Individual Products */}
      <h2>Single Detergent Items</h2>
      <div className="product-grid">
        {detergentProducts.map((product) => (
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
        {detergentCombos.map((combo) => (
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
        {detergentFamilyPacks.map((pack) => (
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

export default DetergentPage;
