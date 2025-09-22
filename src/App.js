import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProductFocus from "./components/ProductFocus";
import ProductItem from "./components/ProductItem";

function App() {
  return (
    <div>
      <div className="bg-secondary dark:bg-accent min-h-screen overflow-hidden transition-colors duration-500">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<div>Home</div>} />
            <Route path="products" element={<ProductItem />} />
            <Route path="product" element={<ProductFocus />} />
            <Route path="*" element={<div>Route not found</div>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
