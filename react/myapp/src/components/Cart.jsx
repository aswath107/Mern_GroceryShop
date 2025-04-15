import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = ({ userId }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/cart/${userId}`).then((res) => {
      setCart(res.data);
    });
  }, [userId]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item._id}>
          <img src={item.productId.image} alt={item.productId.title} width="100" />
          <h3>{item.productId.title}</h3>
          <p>₹{item.productId.price} x {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
