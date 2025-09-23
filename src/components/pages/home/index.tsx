import React from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

const searchTerm = [
  "Space suite",
  "Cow",
  "Uranium",
  "UFO sticker",
  "Camouflage",
];

function Home() {
  function rotatingSearchTerm() {
    return searchTerm[0];
  }

  return (
    <section
      className="bg-cover bg-center w-full h-full transition-colors duration-500 flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/7662302/pexels-photo-7662302.jpeg?_gl=1*noa41a*_ga*NTAxNDM3OTM3LjE3NTc1MTc2MDc.*_ga_8JE65Q40S6*czE3NTg2MjEyMTEkbzQkZzEkdDE3NTg2MjE0MTkkajU4JGwwJGgw')",
      }}
      aria-label="Welcome section"
    >
      <div className="absolute top-0 right-0 backdrop-blur-sm w-full h-full bg-accent/15 inset-0"></div>

      {/* Desktop */}
      <div className="hidden md:flex flex-row items-end justify-between md:w-[calc(50%-40px)] z-20">
        <section className="flex flex-col gap-8 w-[50%]">
          <div className="flex flex-col gap-2">
            <h1
              className="text-[128px] font-bold text-primary leading-[70px] uppercase font-micro"
              aria-label="Welcome"
            >
              Wel-<br></br>come
            </h1>
            <p className="bodytext text-secondary w-40">
              What are you looking for today?
            </p>
          </div>

          <form action="/search" method="get" className="relative w-full">
            <label htmlFor="search-input" className="sr-only">
              Search products
            </label>
            <input
              type="text"
              className="input w-[calc(100%-20px)] z-40 relative"
              name="search"
              id="search-input"
              placeholder={rotatingSearchTerm()}
            />
            <button
              type="submit"
              className="absolute top-[10px] right-7 text-primary z-50"
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
              className="absolute top-[10px] right-7 text-primary"
              aria-hidden="true"
            >
              <MagnifyingGlass size={28} />
            </div>
          </form>
        </section>
        <aside className="bodytext text-secondary text-right w-[35%]">
          At A.Warehouse we sell and list all sorts of things and bits from all
          over the cosmos. Feel free to browse our extended catalogue of items.
          <br></br>
          <br></br>
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
            <br></br>
            <br></br>
            If it exists, you will find it here
          </aside>
        </section>
        <div className="w-[calc(100%-20px)] absolute bottom-5 left-5">
          <form action="/search" method="get" className="relative w-full">
            <label htmlFor="search-input" className="sr-only">
              Search products
            </label>
            <input
              type="text"
              className="input w-[calc(100%-20px)] z-40 relative"
              name="search"
              id="search-input"
              placeholder={rotatingSearchTerm()}
            />
            <button
              type="submit"
              className="absolute top-[10px] right-7 text-primary z-50"
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
              className="absolute top-[10px] right-7 text-primary"
              aria-hidden="true"
            >
              <MagnifyingGlass size={28} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Home;
