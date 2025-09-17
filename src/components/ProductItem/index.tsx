import React from "react";

// interface IProductItem {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     category: string;
//     image: string;
//     rating: {
//         rate: number;
//         count: number;
//     };
// }

const product = {
  id: "13431-qedfqrt-2",
  title: "Foldsack No. 1 Backpack",
  price: 1090.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) and your everyday",
  category: "men's clothing   |   accessories   |   bags",
  image: "https://sw6.elbenwald.de/media/67/ed/b3/1703288898/E1080370_3.jpg",
  rating: {
    rate: 3.9,
  },
};

function ProductItem() {
  return (
    <div className="relative w-[282px] h-[282px] bg-gray-100/[90%] rounded-[10px] backdrop-blur p-1 flex flex-col items-center outline outline-1 outline-primary hover:scale-[102%] transition-transform duration-500">
      {/* Image, ID */}
      <div className="relative flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="248"
          height="18"
          viewBox="0 0 248 18"
          fill="none"
          className="absolute top-0"
        >
          <path
            d="M123.001 0.161133H247.964C246.514 0.16118 244.774 1.27065 244.126 1.91895L231.152 14.8916C229.717 16.3273 227.768 17.1328 225.739 17.1328H22.9287C20.8997 17.1328 18.9513 16.3272 17.5156 14.8916L4.54297 1.91895C3.89469 1.27067 2.15448 0.160156 0.704102 0.160156L123.001 0.161133Z"
            fill="#f3f4f5"
          />
        </svg>
        <p className="text-primary z-10 text-[8px] absolute top-[0.1rem] tracking-[0.1rem] font-inter font-bold uppercase">
          ID: {product.id}
        </p>
        <img
          src={product.image}
          alt={product.title}
          className="rounded-[8px] rounded-b-none h-56 w-[300px] object-cover object-top border border-gray-100"
        />
      </div>

      {/* Title, on sale, rating, tag */}
      <div className="p-3 absolute bottom-1 bg-secondary z-10 w-[calc(100%-8px)] h-[74px] rounded-[8px] flex items-start justify-between overflow-hidden">
        <h2 className="text-[14px] font-inter font-bold uppercase leading-4 text-left tracking-[0.075rem]">
          {product.title}
        </h2>
        <div className="flex flex-col items-center justify-between w-fit gap-[6px]">
          <div className="w-full">
            <p className="text-[6px] text-center font-inter font-bold uppercase bg-primary text-secondary p-[2px] w-full tracking-[0.1rem]">
              On sale
            </p>
          </div>
          <ul className="flex items-center justify-center gap-1">
            {Array.from({ length: 5 }, (_, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <circle
                    cx="5.35352"
                    cy="5.17822"
                    r="4.98071"
                    fill="#080808"
                  />
                </svg>
              </li>
            ))}
          </ul>
        </div>
        <p className="absolute bottom-[2px] right-0 text-[6px] font-inter font-bold uppercase tracking-[0.1rem] p-[2px] bg-blend-difference bg-primary text-secondary ">
          {product.category}
        </p>
      </div>

      {/* Price tag */}
      <div className="absolute bottom-0 left-3 z-20">
        <div className="relative">
          <div className="flex items-center gap-1 absolute transform left-1/2 -translate-x-1/2 translate-y-[45%] z-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
            >
              <path
                d="M5.24168 0.381439C5.63221 -0.00908507 6.2662 -0.00908507 6.65672 0.381439L10.8989 4.6246C11.2892 5.01514 11.2894 5.64821 10.8989 6.03867L6.65672 10.2809C6.2662 10.6714 5.63221 10.6714 5.24168 10.2809L0.999496 6.03867C0.609029 5.6482 0.609144 5.01514 0.999496 4.6246L5.24168 0.381439ZM7.36375 4.00058C6.58272 3.21958 5.3157 3.2196 4.53465 4.00058C3.75361 4.78162 3.75363 6.04863 4.53465 6.82968C5.3157 7.61073 6.58271 7.61073 7.36375 6.82968C8.14474 6.04863 8.14478 4.78161 7.36375 4.00058Z"
                fill="#F5542A"
              />
            </svg>
            <p className="font-micro text-[26px] leading-3">
              {product.price.toFixed(0)}
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="126"
            height="21"
            viewBox="0 0 126 21"
            fill="none"
          >
            <path
              d="M31.1951 0.0221252L98.8945 0.0223816C101.302 0.0223821 103.613 0.97834 105.317 2.68168L120.708 18.0726C121.477 18.8417 123.541 20.1583 125.261 20.1583L31.1951 20.158L31.1951 0.0221252Z"
              fill="#f3f4f6"
            />
            <path
              d="M39.213 0.0227411L26.8321 0.0227345C24.4248 0.0227343 22.1132 0.978689 20.4098 2.68203L5.019 18.0729C4.24989 18.842 2.18591 20.1586 0.465193 20.1586L39.213 20.1586L39.213 0.0227411Z"
              fill="#f3f4f6"
            />
          </svg>
        </div>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-[-21px] left-3 -z-10">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="127"
            height="21"
            viewBox="0 0 127 21"
            fill="none"
          >
            <path
              d="M126.513 0.160156C124.792 0.160343 122.728 1.47704 121.959 2.24609L106.568 17.6367C104.865 19.34 102.554 20.2958 100.146 20.2959H94.4727L26.7734 20.2969C24.3664 20.2968 22.0548 19.3408 20.3516 17.6377L4.96094 2.24609C4.19186 1.47703 2.12786 0.161311 0.407227 0.161133H87.7656V0.160156H126.513Z"
              fill="#F5542A"
            />
          </svg>

          <button className="absolute transform -translate-y-5 left-1/2 -translate-x-1/2 text-[8px] p-1 text-secondary font-inter uppercase font-semibold tracking-[0.075rem] w-full">
            View product
          </button>
        </div>
      </div>
      <div className="absolute bottom-[-21px] right-3 -z-10">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="127"
            height="21"
            viewBox="0 0 127 21"
            fill="none"
          >
            <path
              d="M126.513 0.160156C124.792 0.160343 122.728 1.47704 121.959 2.24609L106.568 17.6367C104.865 19.34 102.554 20.2958 100.146 20.2959H94.4727L26.7734 20.2969C24.3664 20.2968 22.0548 19.3408 20.3516 17.6377L4.96094 2.24609C4.19186 1.47703 2.12786 0.161311 0.407227 0.161133H87.7656V0.160156H126.513Z"
              fill="#EBEBEB"
            />
          </svg>
          <button className="absolute transform -translate-y-5 left-1/2 -translate-x-1/2 p-1 text-[8px] text-primary font-inter uppercase font-semibold tracking-[0.075rem] w-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
