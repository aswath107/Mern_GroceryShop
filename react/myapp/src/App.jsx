import React from "react";
import Grocery from "./Grocery"; // Your main Grocery component
import Categories from "./Categories"; // Your Categories Page component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Grocery />} />
        <Route path="/categories" element={<Categories />} /> {/* CATEGORIES page */}
      </Routes>
    </Router>
  );
};

export default App;