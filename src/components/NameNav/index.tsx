import React from "react";
import { Link } from "react-router-dom";
import { Cow, ShoppingCart, Question } from "@phosphor-icons/react";
import { useCart } from "../CartContext";

function NameNav() {
  const { totalQuantity } = useCart();
  return (
    <div className="absolute top-2 md:top-7 left-1/2 -translate-x-1/2 z-10 pointer-events-auto">
      <ul className="flex gap-7 md:gap-16">
        {/* Products */}
        <li>
          <Link to="/products" className="navLink">
            <Cow size={28} className="md:hidden" />
            <span className="hidden md:inline">Products</span>
          </Link>
        </li>

        {/* Cart */}
        <li className="relative">
          <Link to="/cart" className="navLink">
            <ShoppingCart size={28} className="md:hidden" />
            <span className="hidden md:inline">Cart</span>
          </Link>
          {totalQuantity > 0 ? (
            <span className="absolute top-[-2px] -right-1 md:top-0 md:-right-6 text-xs bg-primary text-secondary dark:text-accent rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center font-inter font-bold">
              {totalQuantity}
            </span>
          ) : null}
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
