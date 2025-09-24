import React from "react";

// interface IProduct {
//   id: string;
//   title: string;
//   description: string;
//   price: number;
//   discountedPrice: number;
//   image: {
//     url: string;
//     alt: string;
//   };
//   rating: number;
//   tags: string[];
//   reviews: {
//     id: string;
//     username: string;
//     rating: number;
//     description: string;
//   }[];
// }

const product = {
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
};

function ProductItem() {
  return (
    <div className="relative w-[282px] h-auto md:w-[328px] aspect-square bg-gray-100/[90%] rounded-[10px] backdrop-blur p-1 flex flex-col items-center outline outline-1 outline-primary hover:scale-[102%] transition-transform !duration-500">
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
          src={product.image.url}
          alt={product.image.alt}
          className="rounded-[8px] h-auto w-full aspect-square object-cover object-top border border-gray-100"
        />
      </div>

      {/* Title, on sale, rating, tag */}
      <div className="p-3 md:p-4 absolute bottom-1 bg-secondary z-10 w-[calc(100%-8px)] h-auto rounded-[8px] flex items-start justify-between overflow-hidden">
        <h2 className="text-[14px] md:text-[16px] font-inter font-bold uppercase leading-4 md:leading-5 text-left tracking-[0.075rem]">
          {product.title}
        </h2>
        <div className="flex flex-col items-center justify-between w-fit gap-[6px] md:gap-[8px] pl-3">
          <div className="w-full">
            <p className="text-[6px] md:text-[8px] text-center font-inter font-bold uppercase bg-primary text-secondary p-[2px] w-full tracking-[0.1rem]">
              On sale
            </p>
          </div>
          <ul className="flex items-center justify-center gap-1 pb-3 md:pb-4">
            {Array.from({ length: 5 }, (_, index) => (
              <li key={index}>
                <div className="w-[10px] h-[10px] md:w-3 md:h-3 bg-accent rounded-full flex items-center justify-center">
                  <div className="w-[6px] h-[6px] md:w-2 md:h-2 bg-primary rounded-full z-10"></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="absolute bottom-[2px] right-0 text-[6px] md:text-[8px] font-inter font-bold uppercase tracking-[0.1rem] p-[2px] bg-blend-difference bg-primary text-secondary">
          {product.tags[0]}
        </p>
      </div>

      {/* Price tag */}
      <div className="absolute bottom-0 left-3 md:left-2 z-20">
        <div className="relative">
          <div className="flex items-center gap-1 absolute transform left-1/2 -translate-x-1/2 translate-y-[45%] md:translate-y-[40%] z-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              className="block md:hidden"
            >
              <path
                d="M5.24168 0.381439C5.63221 -0.00908507 6.2662 -0.00908507 6.65672 0.381439L10.8989 4.6246C11.2892 5.01514 11.2894 5.64821 10.8989 6.03867L6.65672 10.2809C6.2662 10.6714 5.63221 10.6714 5.24168 10.2809L0.999496 6.03867C0.609029 5.6482 0.609144 5.01514 0.999496 4.6246L5.24168 0.381439ZM7.36375 4.00058C6.58272 3.21958 5.3157 3.2196 4.53465 4.00058C3.75361 4.78162 3.75363 6.04863 4.53465 6.82968C5.3157 7.61073 6.58271 7.61073 7.36375 6.82968C8.14474 6.04863 8.14478 4.78161 7.36375 4.00058Z"
                fill="#F5542A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="15"
              viewBox="0 0 17 16"
              fill="none"
              className="hidden md:block"
            >
              <path
                d="M7.82762 0.624268C8.21813 0.233762 8.85116 0.233799 9.24168 0.624268L16.0698 7.45239C16.4603 7.84292 16.4603 8.47593 16.0698 8.86646L9.24168 15.6946C8.85116 16.0851 8.21815 16.0851 7.82762 15.6946L0.999496 8.86646C0.609028 8.47593 0.608991 7.8429 0.999496 7.45239L7.82762 0.624268ZM10.6567 5.96606C9.48518 4.79452 7.58514 4.79458 6.41356 5.96606L6.20946 6.17017C5.03788 7.34174 5.03788 9.24176 6.20946 10.4133L6.41356 10.6174C7.58513 11.789 9.48515 11.789 10.6567 10.6174L10.8608 10.4133C12.0323 9.24175 12.0324 7.34171 10.8608 6.17017L10.6567 5.96606Z"
                fill="#F5542A"
              />
            </svg>
            <p className="font-micro text-[26px] md:text-[32px] leading-3">
              {product.price.toFixed(0)}
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="126"
            height="21"
            viewBox="0 0 126 21"
            fill="none"
            className="block md:hidden"
          >
            <path
              d="M98.8945 0.0224609C101.302 0.0224816 103.613 0.978434 105.316 2.68164L120.708 18.0723C121.477 18.8414 123.541 20.1582 125.262 20.1582H0.464844C2.18527 20.1582 4.24914 18.8424 5.01855 18.0732L20.4102 2.68164C22.1134 0.978542 24.425 0.0224759 26.832 0.0224609H98.8945Z"
              fill="#f3f4f6"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="157"
            height="26"
            viewBox="0 0 157 26"
            fill="none"
            className="hidden md:block"
          >
            <path
              d="M123.165 0.0578613C126.166 0.0579715 129.048 1.24908 131.171 3.37231L150.356 22.5588C151.315 23.5176 153.888 25.1584 156.033 25.1584H0.46582C2.61075 25.1583 5.18388 23.5175 6.14258 22.5588L25.3281 3.37329C27.4515 1.24996 30.3332 0.0578611 33.334 0.0578613H38.7725V0.0568848L123.165 0.0578613Z"
              fill="#f3f4f6"
            />
          </svg>
        </div>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-[-21px] md:bottom-[-26px] left-3 md:left-2 -z-10">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="127"
            height="21"
            viewBox="0 0 127 21"
            fill="none"
            className="block md:hidden"
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
            className="hidden md:block rotate-180"
          >
            <path
              d="M123.165 0.0578613C126.166 0.0579715 129.048 1.24908 131.171 3.37231L150.356 22.5588C151.315 23.5176 153.888 25.1584 156.033 25.1584H0.46582C2.61075 25.1583 5.18388 23.5175 6.14258 22.5588L25.3281 3.37329C27.4515 1.24996 30.3332 0.0578611 33.334 0.0578613H38.7725V0.0568848L123.165 0.0578613Z"
              fill="#F5542A"
            />
          </svg>

          <button className="absolute transform -translate-y-5 md:-translate-y-6 left-1/2 -translate-x-1/2 text-[8px] md:text-[10px] p-1 text-secondary font-inter uppercase font-semibold tracking-[0.075rem] w-full">
            View product
          </button>
        </div>
      </div>
      <div className="absolute bottom-[-21px] md:bottom-[-26px] right-3 md:right-2 -z-20">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="127"
            height="21"
            viewBox="0 0 127 21"
            fill="none"
            className="block md:hidden"
          >
            <path
              d="M126.513 0.160156C124.792 0.160343 122.728 1.47704 121.959 2.24609L106.568 17.6367C104.865 19.34 102.554 20.2958 100.146 20.2959H94.4727L26.7734 20.2969C24.3664 20.2968 22.0548 19.3408 20.3516 17.6377L4.96094 2.24609C4.19186 1.47703 2.12786 0.161311 0.407227 0.161133H87.7656V0.160156H126.513Z"
              fill="#EBEBEB"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="157"
            height="26"
            viewBox="0 0 157 26"
            fill="none"
            className="hidden md:block rotate-180"
          >
            <path
              d="M123.165 0.0578613C126.166 0.0579715 129.048 1.24908 131.171 3.37231L150.356 22.5588C151.315 23.5176 153.888 25.1584 156.033 25.1584H0.46582C2.61075 25.1583 5.18388 23.5175 6.14258 22.5588L25.3281 3.37329C27.4515 1.24996 30.3332 0.0578611 33.334 0.0578613H38.7725V0.0568848L123.165 0.0578613Z"
              fill="#EBEBEB"
            />
          </svg>
          <button className="absolute transform -translate-y-5 md:-translate-y-6 left-1/2 -translate-x-1/2 text-[8px] md:text-[10px] p-1 text-primary font-inter uppercase font-semibold tracking-[0.075rem] w-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
