import React from "react";
import { Link } from "react-router-dom";
import { Cow, ShoppingCart, Question } from "@phosphor-icons/react";

function NameNav() {
  return (
    <div className="absolute top-2 md:top-7 left-1/2 -translate-x-1/2 z-10 pointer-events-auto">
      <ul className="flex gap-7 md:gap-16">
        {/* Products */}
        <li>
          <Link to="/" className="navLink">
            <Cow size={28} className="md:hidden" />
            <span className="hidden md:inline">Products</span>
          </Link>
        </li>

        {/* Cart */}
        <li>
          <Link to="/products" className="navLink">
            <ShoppingCart size={28} className="md:hidden" />
            <span className="hidden md:inline">Cart</span>
          </Link>
        </li>

        {/* Contact */}
        <li>
          <Link to="/contact" className="navLink">
            <Question size={28} className="md:hidden" />
            <span className="hidden md:inline">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NameNav;
