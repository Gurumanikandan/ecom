import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./components/Signup";
import AddProduct from "./component/AddProduct";
import Home from "./components/Home";
import ProductList from "./component/ProductList";
import CartPage from "./components/CartPage";
import { CartProvider } from "./components/CartContext";


const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<AddProduct />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
