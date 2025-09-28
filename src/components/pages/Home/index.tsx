import React, { useState, useEffect, FormEvent } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
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
  const [search, setSearch] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % searchTerms.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [searchTerms.length]);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = search || searchTerms[currentIndex];
    navigate(`/products?search=${encodeURIComponent(query)}`);
  };

  return (
    <section
      className="bg-cover bg-center w-full h-full flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/7662302/pexels-photo-7662302.jpeg')",
      }}
      aria-label="Welcome section"
    >
      <div className="absolute top-0 right-0 backdrop-blur-sm w-full h-full bg-accent/15 inset-0"></div>

      {/* Desktop */}
      <div className="hidden md:flex flex-row items-end justify-between p-5 md:w-[80%] xl:w-1/2 z-20">
        <section className="flex flex-col gap-8 w-[50%]">
          <div className="flex flex-col gap-2">
            <h1
              className="text-[128px] font-bold text-primary leading-[70px] uppercase font-micro"
              aria-label="Welcome"
            >
              Wel&shy;come
            </h1>
            <p className="bodytext text-secondary w-40">
              What are you looking for today?
            </p>
          </div>

          <form onSubmit={handleSearch} className="relative w-full">
            <label htmlFor="search-input" className="sr-only">
              Search products
            </label>
            <input
              type="text"
              id="search-input"
              name="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={searchTerms[currentIndex]}
              className="input !bg-[rgba(0,0,0,0.05)] w-[calc(100%-20px)] z-40 relative"
            />
            <button
              type="submit"
              className="absolute top-[10px] right-7 text-primary z-50"
            >
              <MagnifyingGlass size={28} />
            </button>
          </form>
        </section>
        <aside className="bodytext text-secondary text-right w-[35%]">
          At A.Warehouse we sell and list all sorts of things and bits from all
          over the cosmos. Feel free to browse our extended catalogue of items.
          <br />
          <br />
          If it exists, you will find it here
        </aside>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden flex-row items-end justify-between md:w-[calc(100%-40px)] z-20">
        <section className="flex flex-col gap-8 w-full p-5">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-[100px] font-bold text-primary leading-[50px] uppercase font-micro">
              Welcome
            </h1>
            <p className="bodytext text-secondary px-10">
              What are you looking for today?
            </p>
          </div>
          <aside className="bodytext text-secondary text-left px-10">
            At A.Warehouse we sell and list all sorts of things and bits from
            all over the cosmos. Feel free to browse our extended catalogue of
            items.
            <br />
            <br />
            If it exists, you will find it here
          </aside>
        </section>
        <div className="w-[calc(100%-20px)] absolute bottom-5 left-5">
          <form onSubmit={handleSearch} className="relative w-full">
            <label htmlFor="search-input-mobile" className="sr-only">
              Search products
            </label>
            <input
              type="text"
              id="search-input-mobile"
              name="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={searchTerms[currentIndex]}
              className="input w-[calc(100%-20px)] z-40 relative"
            />
            <button
              type="submit"
              className="absolute top-[10px] right-7 text-primary z-50"
            >
              <MagnifyingGlass size={28} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Home;
