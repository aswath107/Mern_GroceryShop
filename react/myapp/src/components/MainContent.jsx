// import React from "react";
// import "./MainContent.css";

// const products = [
//   {
//     id: 1,
//     name: "Babelois Baby Diapers",
//     description:
//       "Soft, absorbent, and comfortable for your baby. Size: Large (8-14 kg), Pack of 60",
//     discount: 50,
//     originalPrice: 1000,
//     image: "/diaper.jpg",
//   },
//   {
//     id: 2,
//     name: "Almond Cashew Cookies",
//     description:
//       "Vadilal Quick Treat Classic Khari (Crispy Wheat Puff Pastry) | Jumbo Pack 400gm (200gm X 2).",
//     discount: 60,
//     originalPrice: 500,
//     image: "/khari.jpg",
//   },
//   {
//     id: 3,
//     name: "Wild Forest Honey ", 
//     description:
//       "Pure and healthy natural honey | (500gm + 100gm Free)| No added sugar or preservatives.",
//     discount: 30,
//     originalPrice: 800,
//     image: "/honey.png",
//   },
//   {
//     id: 4,
//     name: "Daawat Basmati Rice",
//     description:
//       "Premium quality long-grain rice | 5kg Pack ",
//     discount: 25,
//     originalPrice: 1200,
//     image: "/daawat.png",
//   },
// ];

// const MainContent = () => {
//   return (
//     <main className="main-content">
//       <div className="product-list">
//         {products.map((product) => {
//           const discountedPrice = (
//             product.originalPrice - (product.originalPrice * product.discount) / 100
//           ).toFixed(2);

//           return (
//             <div key={product.id} className="product-banner">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="product-image"
//               />
//               <div className="discount-badge">{product.discount}% OFF</div>
//               <div className="banner-content">
//                 <h2>{product.name}</h2>
//                 <p>{product.description}</p>
//                 {/* ✅ Price Section with Strikethrough Original Price */}
//                 <p className="price">
//                   <span className="original-price">₹{product.originalPrice}</span>
//                   <span className="discounted-price">₹{discountedPrice}</span>
//                 </p>
//                 <button className="shop-now-button">Shop Now</button>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* ✅ Feature Section Above the Footer */}
//       <section className="features-section">
//         <div className="feature">
//           <img src="/fastdeli.jpg" alt="Free Delivery" />
//           <h3>Free Delivery</h3>
//           <p>Fast & friendly grocery delivery in half the time.</p>
//         </div>

//         <div className="feature">
//           <img src="/bigsave.jpeg" alt="Big Saving Shop" />
//           <h3>Big Savings</h3>
//           <p>Get the best deals on groceries & essentials.</p>
//         </div>

//         <div className="feature">
//           <img src="/hourser.jpg" alt="Online Support 24/7" />
//           <h3>24/7 Support</h3>
//           <p>We're here anytime you need assistance.</p>
//         </div>

//         <div className="feature">
//           <img src="/back.png" alt="Money Back Return" />
//           <h3>Money Back Guarantee</h3>
//           <p>Not satisfied? We promise hassle-free returns.</p>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default MainContent;

import React, { useState, useEffect } from "react";
import "./MainContent.css";

const products = [
  {
    id: 1,
    name: "Babelois Baby Diapers",
    description: "Soft, absorbent, and comfortable for your baby. Pack of 60",
    discount: 50,
    originalPrice: 1000,
    image: "/diaper.jpg",
  },
  {
    id: 2,
    name: "Almond Cashew Cookies",
    description: "Crispy Wheat Puff Pastry | Jumbo Pack 400gm.",
    discount: 60,
    originalPrice: 500,
    image: "/khari.jpg",
  },
  {
    id: 3,
    name: "Wild Forest Honey",
    description: "Pure natural honey | (500gm + 100gm Free).",
    discount: 30,
    originalPrice: 800,
    image: "/honey.png",
  },
  {
    id: 4,
    name: "Daawat Basmati Rice",
    description: "Premium quality long-grain rice | 5kg Pack.",
    discount: 25,
    originalPrice: 1200,
    image: "/daawat.png",
  },
];

const ImageList = [
  {
    id: 1,
    img: "/slide1.webp",
  },
  {
    id: 2,
    img: "/slide2.webp",
  },
  {
    id: 3,
    img: "/slide3.webp",
  },
  {
    id: 4,
    img: "/slide4.webp",
  },
];

const MainContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ImageList.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ImageList.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="main-container">
      {/* Slider Section */}
      <div className="slider-wrapper">
        <button className="slider-button slider-button-left" onClick={prevSlide}>
          &#10094;
        </button>

        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {ImageList.map((image) => (
            <div key={image.id} className="slider-item">
              <img src={image.img} alt="Slide" className="slider-image" />
            </div>
          ))}
        </div>

        <button className="slider-button slider-button-right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      {/* Product Section */}
      <div className="product-grid">
        {products.map((product) => {
          const discountedPrice = (
            product.originalPrice - (product.originalPrice * product.discount) / 100
          ).toFixed(2);

          return (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-card-image" />
              <div className="product-discount">{product.discount}% OFF</div>
              <div className="product-details">
                <h2 className="product-title">{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-pricing">
                  <span className="product-original-price">₹{product.originalPrice}</span>
                  <span className="product-discounted-price">₹{discountedPrice}</span>
                </p>
                <button className="product-button">Shop Now</button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Features Section */}
      <section className="features-section">
      <div className="feature-item">
        <div className="feature-box">
          <img src="/fastdeli.jpg" alt="Free Delivery" className="feature-image" />
          <h3 className="feature-title">Free Delivery</h3>
          <p className="feature-description">Fast & friendly grocery delivery in half the time.</p>
        </div>
      </div>

      <div className="feature-item">
        <div className="feature-box">
          <img src="/bigsave.jpeg" alt="Big Saving Shop" className="feature-image" />
          <h3 className="feature-title">Big Savings</h3>
          <p className="feature-description">Get the best deals on groceries & essentials.</p>
        </div>
      </div>

      <div className="feature-item">
        <div className="feature-box">
          <img src="/hourser.jpg" alt="Online Support 24/7" className="feature-image" />
          <h3 className="feature-title">24/7 Support</h3>
          <p className="feature-description">We're here anytime you need assistance.</p>
        </div>
      </div>

      <div className="feature-item">
        <div className="feature-box">
          <img src="/back.png" alt="Money Back Return" className="feature-image" />
          <h3 className="feature-title">Money Back Guarantee</h3>
          <p className="feature-description">Not satisfied? We promise hassle-free returns.</p>
        </div>
      </div>
    </section>
    </main>
  );
};

export default MainContent;
