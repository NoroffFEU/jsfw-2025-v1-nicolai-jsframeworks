import React from "react";
import CartItem from "../../CartItem";

const products = [
  {
    id: "159fdd2f-2b12-46de-9654-d9139525ba87",
    title: "Gold headphones",
    description: "Professional headphones with gold trim.",
    price: 449.99,
    discountedPrice: 382.49,
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

const totalPrice = products
  .reduce((acc, product) => acc + product.price, 0)
  .toFixed(0);
const totalItems = products.reduce((acc, product) => acc + 1, 0);

function Cart() {
  function handleCheckout() {
    window.location.href = "/success";
    // Update to clear out cart
    localStorage.clear();
  }
  function clearCart() {
    localStorage.clear();
    window.location.href = "/";
  }
  return (
    <section
      className="bg-accent dark:bg-secondary w-full h-full transition-colors duration-500 flex flex-col items-center justify-center gap-5"
      aria-label="Contact section"
    >
      <div className="flex flex-row items-start justify-between w-full max-h-[75%] p-5 md:w-1/2 z-20">
        <h1
          className="text-[100px] md:text-[128px] font-bold text-primary leading-[10px] md:leading-[70px] uppercase font-micro w-full md:w-1/2 text-center md:text-left"
          aria-label="Contact"
        >
          Cart
        </h1>
      </div>
      <div className="flex flex-col gap-3 w-full md:w-1/2 px-5">
        {products.map((product) => (
          <CartItem key={product.id} {...product} />
        ))}
      </div>
      <div className="flex flex-col items-end w-full md:w-1/2 px-5">
        {/* button 1 mobile */}
        <div className="w-full md:w-[calc(50%-20px)] flex justify-center">
          <div className="relative group mt-[1px] block xs:hidden md:block 2xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="127"
              height="21"
              viewBox="0 0 127 21"
              fill="none"
              className="block lg:hidden rotate-180 transform"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M126.513 0.160156C124.792 0.160343 122.728 1.47704 121.959 2.24609L106.568 17.6367C104.865 19.34 102.554 20.2958 100.146 20.2959H94.4727L26.7734 20.2969C24.3664 20.2968 22.0548 19.3408 20.3516 17.6377L4.96094 2.24609C4.19186 1.47703 2.12786 0.161311 0.407227 0.161133H87.7656V0.160156H126.513Z"
                className="stroke-primary stroke-1"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="157"
              height="26"
              viewBox="0 0 157 26"
              fill="none"
              className="hidden lg:block translate-y-[1px]"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M123.165 0.0578613C126.166 0.0579715 129.048 1.24908 131.171 3.37231L150.356 22.5588C151.315 23.5176 153.888 25.1584 156.033 25.1584H0.46582C2.61075 25.1583 5.18388 23.5175 6.14258 22.5588L25.3281 3.37329C27.4515 1.24996 30.3332 0.0578611 33.334 0.0578613H38.7725V0.0568848L123.165 0.0578613Z"
                className="stroke-primary stroke-1 fill-accent dark:fill-secondary group-hover:fill-primary transition-colors duration-500"
              />
            </svg>
            <button
              type="button"
              onClick={clearCart}
              className="absolute transform -translate-y-5 lg:-translate-y-6 left-1/2 -translate-x-1/2 text-[8px] lg:text-[10px] p-1 text-primary group-hover:text-secondary transition-colors duration-500 font-inter uppercase font-semibold tracking-[0.075rem] w-full"
            >
              <div className="flex items-center justify-center gap-1">
                <p>Empty</p>
              </div>
            </button>
          </div>
        </div>
        {/* Total */}
        <div className="input w-full md:w-[calc(50%-20px)] flex flex-row items-center justify-between">
          <p className="font-micro text-3xl leading-[50%]">{totalItems}</p>
          <p className="font-micro text-3xl leading-[50%]">{totalPrice}</p>
        </div>
        <div className="w-full md:w-[calc(50%-20px)] flex justify-center">
          {/* button 1 */}
          <div className="relative group mt-[1px] hidden xs:block md:hidden 2xl:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="127"
              height="21"
              viewBox="0 0 127 21"
              fill="none"
              className="block lg:hidden -translate-y-[1px]"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M126.513 0.160156C124.792 0.160343 122.728 1.47704 121.959 2.24609L106.568 17.6367C104.865 19.34 102.554 20.2958 100.146 20.2959H94.4727L26.7734 20.2969C24.3664 20.2968 22.0548 19.3408 20.3516 17.6377L4.96094 2.24609C4.19186 1.47703 2.12786 0.161311 0.407227 0.161133H87.7656V0.160156H126.513Z"
                className="stroke-primary stroke-1"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="157"
              height="26"
              viewBox="0 0 157 26"
              fill="none"
              className="hidden lg:block rotate-180 -translate-y-[1px]"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M123.165 0.0578613C126.166 0.0579715 129.048 1.24908 131.171 3.37231L150.356 22.5588C151.315 23.5176 153.888 25.1584 156.033 25.1584H0.46582C2.61075 25.1583 5.18388 23.5175 6.14258 22.5588L25.3281 3.37329C27.4515 1.24996 30.3332 0.0578611 33.334 0.0578613H38.7725V0.0568848L123.165 0.0578613Z"
                className="stroke-primary stroke-1 fill-accent dark:fill-secondary group-hover:fill-primary transition-colors duration-500"
              />
            </svg>
            <button
              type="button"
              onClick={clearCart}
              className="absolute transform -translate-y-5 lg:-translate-y-6 left-1/2 -translate-x-1/2 text-[8px] lg:text-[10px] p-1 text-primary group-hover:text-secondary transition-colors duration-500 font-inter uppercase font-semibold tracking-[0.075rem] w-full"
            >
              <div className="flex items-center justify-center gap-1">
                <p>Empty</p>
              </div>
            </button>
          </div>
          {/* button 2 */}
          <div className="relative group mt-[1px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="127"
              height="21"
              viewBox="0 0 127 21"
              fill="none"
              className="block lg:hidden"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M126.513 0.160156C124.792 0.160343 122.728 1.47704 121.959 2.24609L106.568 17.6367C104.865 19.34 102.554 20.2958 100.146 20.2959H94.4727L26.7734 20.2969C24.3664 20.2968 22.0548 19.3408 20.3516 17.6377L4.96094 2.24609C4.19186 1.47703 2.12786 0.161311 0.407227 0.161133H87.7656V0.160156H126.513Z"
                fill="#F5542A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="157"
              height="26"
              viewBox="0 0 157 26"
              fill="none"
              className="hidden lg:block rotate-180 -translate-y-[1px]"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M123.165 0.0578613C126.166 0.0579715 129.048 1.24908 131.171 3.37231L150.356 22.5588C151.315 23.5176 153.888 25.1584 156.033 25.1584H0.46582C2.61075 25.1583 5.18388 23.5175 6.14258 22.5588L25.3281 3.37329C27.4515 1.24996 30.3332 0.0578611 33.334 0.0578613H38.7725V0.0568848L123.165 0.0578613Z"
                className="fill-primary group-hover:fill-accent group-hover:dark:fill-secondary stroke-1 stroke-primary transition-colors duration-500"
              />
            </svg>

            <button
              type="submit"
              onClick={handleCheckout}
              className="absolute transform -translate-y-5 lg:-translate-y-6 left-1/2 -translate-x-1/2 text-[8px] lg:text-[10px] p-1 text-secondary group-hover:text-primary transition-colors duration-500 font-inter uppercase font-semibold tracking-[0.075rem] w-full"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
