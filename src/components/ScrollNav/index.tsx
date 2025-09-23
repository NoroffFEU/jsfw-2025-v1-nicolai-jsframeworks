import React from "react";
import { Link } from "react-router-dom";

function ScrollNav() {
  return (
    <ul className="flex-col gap-5 items-center absolute right-10 hidden md:flex transform top-1/2 -translate-y-1/2 pointer-events-auto z-10">
      <li>
        <Link
          className="block h-2 w-2 bg-primary rounded-full cursor-pointer"
          to="/"
        ></Link>
      </li>
      <li className="h-1 w-1 bg-primary rounded-full"></li>
      <li className="h-1 w-1 bg-primary rounded-full"></li>
      <li className="h-1 w-1 bg-primary rounded-full"></li>
      <li>
        <Link
          className="block h-2 w-2 bg-primary rounded-full"
          to="/cart"
        ></Link>
      </li>
      <li className="h-1 w-1 bg-primary rounded-full"></li>
      <li className="h-1 w-1 bg-primary rounded-full"></li>
      <li className="h-1 w-1 bg-primary rounded-full"></li>
      <li>
        <Link
          className="block h-2 w-2 bg-primary rounded-full cursor-pointer"
          to="/contact"
        ></Link>
      </li>
    </ul>
  );
}

export default ScrollNav;
