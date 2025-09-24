import React from "react";
import ProductItem from "../../ProductItem";
import { MagnifyingGlass } from "@phosphor-icons/react";

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

const searchTerm = [
  "Space suite",
  "Cow",
  "Uranium",
  "UFO sticker",
  "Camouflage",
];

function Products() {
  function rotatingSearchTerm() {
    return searchTerm[0];
  }
  return (
    <section
      className="bg-accent dark:bg-secondary w-full h-full flex flex-col items-center pt-32 md:py-20 gap-5 overflow-y-scroll"
      aria-label="Products section"
    >
      <div className="flex flex-col items-center justify-center gap-10 w-full max-h-[75%] p-5 md:w-[80%] xl:w-1/2 z-20">
        <h1
          className="text-[80px] xs:text-[100px] md:text-[128px] font-bold text-primary leading-[10px] md:leading-[70px] uppercase font-micro"
          aria-label="Products"
        >
          Products
        </h1>
        <form action="/search" method="get" className="relative w-full">
          <label htmlFor="search-input" className="sr-only">
            Search products
          </label>
          <input
            type="text"
            className="input w-full z-40 relative"
            name="search"
            id="search-input"
            placeholder={rotatingSearchTerm()}
          />
          <button
            type="submit"
            className="absolute top-[10px] right-3 text-primary z-50"
          >
            <MagnifyingGlass size={28} />
          </button>
          <p
            className="absolute top-4 left-4 bodytext text-primary"
            aria-hidden="true"
          >
            {rotatingSearchTerm()}
          </p>
          <div
            className="absolute top-[10px] right-3 text-primary"
            aria-hidden="true"
          >
            <MagnifyingGlass size={28} />
          </div>
        </form>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-12 w-full md:w-[80%] xl:w-1/2 px-3 pb-5">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))
        ) : (
          <p className="bodytext !text-base text-center p-10 col-span-2">
            No products match your search, how did you do that?.
          </p>
        )}
      </ul>
      <div className="flex flex-col items-end w-full md:w-[80%] xl:w-1/2 px-5"></div>
    </section>
  );
}

export default Products;
