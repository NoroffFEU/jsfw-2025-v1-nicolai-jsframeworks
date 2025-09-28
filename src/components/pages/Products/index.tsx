import React, { useState, useEffect } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import ShowingProducts from "../../ShowingProducts";
import { useLocation } from "react-router-dom";

function Products() {
  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const initialSearch = param.get("search") || "";
  const searchTerms = [
    "Space suite",
    "Cow",
    "Uranium",
    "UFO sticker",
    "Camouflage",
    "Sheet metal",
    "Screwdriver",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % searchTerms.length);
    }, 3000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [searchTerms.length]);

  const [search, setSearch] = useState(initialSearch);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 500);
    return () => clearTimeout(handler);
  }, [search]);

  return (
    <section
      className="bg-accent dark:bg-secondary w-full h-screen flex flex-col items-center pt-32 md:py-20 gap-5 overflow-y-auto"
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
            placeholder={searchTerms[currentIndex]}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
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
            {search ? search : searchTerms[currentIndex]}
          </p>
          <div
            className="absolute top-[10px] right-3 text-primary"
            aria-hidden="true"
          >
            <MagnifyingGlass size={28} />
          </div>
        </form>
      </div>
      <ShowingProducts search={debouncedSearch} />
      <div className="flex flex-col items-end w-full md:w-[80%] xl:w-1/2 px-5"></div>
    </section>
  );
}

export default Products;
