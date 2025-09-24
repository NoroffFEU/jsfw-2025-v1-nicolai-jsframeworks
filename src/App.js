import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import ProductPage from "./components/pages/ProductPage/ProductPage";
import Cart from "./components/pages/Cart";
import Success from "./components/pages/Success";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div>
      <div className="bg-secondary dark:bg-accent min-h-screen overflow-hidden">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="success" element={<Success />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<div>Route not found</div>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
