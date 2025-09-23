import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import Success from "./components/pages/Success";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div>
      <div className="bg-secondary dark:bg-accent min-h-screen overflow-hidden transition-colors duration-500">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
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
