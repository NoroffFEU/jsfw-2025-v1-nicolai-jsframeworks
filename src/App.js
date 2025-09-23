import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProductItem from "./components/ProductItem";
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";

function App() {
  return (
    <div>
      <div className="bg-secondary dark:bg-accent min-h-screen overflow-hidden transition-colors duration-500">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<ProductItem />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<div>Route not found</div>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
