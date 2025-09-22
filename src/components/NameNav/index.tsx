import React from "react";
import { Link } from "react-router-dom";
import { Cow, ShoppingCart, Question } from "@phosphor-icons/react";

function NameNav() {
  return (
    <div className="absolute top-2 md:top-6 left-1/2 -translate-x-1/2 z-10 pointer-events-auto">
      <ul className="hidden md:flex gap-16">
        <li>
          <Link
            className="text-primary active:font-bold active:text-accent uppercase text-sm font-inter font-medium hover:text-accent dark:hover:text-secondary hover:font-bold tracking-[0.1rem] transition-all duration-300"
            to="/"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            className="text-primary active:font-bold active:text-accent uppercase text-sm font-inter font-medium hover:text-accent dark:hover:text-secondary hover:font-bold tracking-[0.1rem] transition-all duration-300"
            to="/products"
          >
            Cart
          </Link>
        </li>
        <li>
          <Link
            className="text-primary active:font-bold active:text-accent uppercase text-sm font-inter font-medium hover:text-accent dark:hover:text-secondary hover:font-bold tracking-[0.1rem] transition-all duration-300"
            to="/product"
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* Mobile */}
      <ul className="flex md:hidden gap-7">
        <li>
          <Link
            className="text-primary active:font-bold active:text-accent uppercase text-sm font-inter font-medium hover:text-accent dark:hover:text-secondary hover:font-bold tracking-[0.1rem] transition-all duration-300"
            to="/"
          >
            <Cow size={28} />
          </Link>
        </li>
        <li>
          <Link
            className="text-primary active:font-bold active:text-accent uppercase text-sm font-inter font-medium hover:text-accent dark:hover:text-secondary hover:font-bold tracking-[0.1rem] transition-all duration-300"
            to="/products"
          >
            <ShoppingCart size={28} />
          </Link>
        </li>
        <li>
          <Link
            className="text-primary active:font-bold active:text-accent uppercase text-sm font-inter font-medium hover:text-accent dark:hover:text-secondary hover:font-bold tracking-[0.1rem] transition-all duration-300"
            to="/product"
          >
            <Question size={28} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NameNav;
