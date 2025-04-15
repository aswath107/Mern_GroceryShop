import axios from "axios";

// Function to add a product to cart
export const handleAddToCart = async (product) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const index = cart.findIndex(item => item._id === product._id);

  if (index !== -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  // Send to Backend
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    await axios.post("http://localhost:8000/api/cart/add", {
      userId: user._id,
      productId: product._id,
      title: product.title,
      price: product.price,
      image: product.image
    });
  }

  alert(`${product.title} added to cart!`);
};

// Function to get cart from localStorage
export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

// Function to update cart quantity
export const updateCartQuantity = async (productId, quantity) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const index = cart.findIndex(item => item._id === productId);

  if (index !== -1) {
    if (quantity > 0) {
      cart[index].quantity = quantity;
    } else {
      cart.splice(index, 1); // Remove item if quantity is 0
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Update backend cart
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      await axios.put("http://localhost:8000/api/cart/update", {
        userId: user._id,
        productId: productId,
        quantity: quantity
      });
    }
  }
};

// Function to clear cart
export const clearCart = () => {
  localStorage.removeItem("cart");
};
