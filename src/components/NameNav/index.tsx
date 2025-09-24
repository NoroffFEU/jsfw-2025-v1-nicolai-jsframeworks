import React from "react";
import { Link } from "react-router-dom";
import { Cow, ShoppingCart, Question } from "@phosphor-icons/react";

const products = [
  {
    id: "159fdd2f-2b12-46de-9654-d9139525ba87",
    title: "Gold headphones",
    description: "Professional headphones with gold trim.",
    price: 449.99,
    discountedPrice: 0,
    image: {
      url: "https://sw6.elbenwald.de/media/67/ed/b3/1703288898/E1080370_3.jpg",
      alt: "Gold headphones laying on a white background",
    },
    rating: 4,
    tags: ["headphones"],
    reviews: [
      {
        id: "88e11191-d2e5-4bfb-9bcb-d7e158284657",
        username: "Michael J.",
        rating: 4,
        description: "Good sound quality.",
      },
    ],
  },
  {
    id: "109566af-c5c2-4f87-86cb-76f36fb8d378",
    title: "Vanilla Perfume",
    description:
      "Women's perfume that smells a warm and sweet, with nuances of wood and jasmine.",
    price: 2599.99,
    discountedPrice: 2079.99,
    image: {
      url: "https://sw6.elbenwald.de/media/67/ed/b3/1703288898/E1080370_3.jpg",
      alt: "White perfume bottle on a yellow background",
    },
    rating: 5,
    tags: ["perfume", "beauty"],
    reviews: [
      {
        id: "90a61e3e-355a-42e4-b038-d91dcad33c20",
        username: "Jim N.",
        rating: 5,
        description: "My partner loves it, its her favourite.",
      },
    ],
  },
  {
    id: "1e3f6b6b-3b2b-4b0b-8b3b-3b6b6b1e3f6b",
    title: "Sneakers",
    description: "Comfortable and stylish sneakers.",
    price: 499.99,
    discountedPrice: 399.99,
    image: {
      url: "https://sw6.elbenwald.de/media/67/ed/b3/1703288898/E1080370_3.jpg",
      alt: "Black sneakers on a white background",
    },
    rating: 4,
    tags: ["sneakers"],
    reviews: [
      {
        id: "90a61e3e-355a-42e4-b038-d91dcad33c20",
        username: "Jim N.",
        rating: 5,
        description: "My partner loves it, its her favourite.",
      },
    ],
  },
];

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
        <li className="relative">
          <Link to="/cart" className="navLink">
            <ShoppingCart size={28} className="md:hidden" />
            <span className="hidden md:inline">Cart</span>
          </Link>
          {products.length > 0 ? <span className="absolute top-[-2px] -right-1 md:top-0 md:-right-6 text-xs bg-primary text-accent rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center font-inter font-bold">{products.length}</span> : null}
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
