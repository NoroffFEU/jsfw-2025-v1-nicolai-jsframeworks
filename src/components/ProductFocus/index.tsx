import React from "react";
import { StarFourIcon } from "@phosphor-icons/react";
import { IProduct } from "../typescript.tsx";
import { useCart } from "../CartContext";

const starIconSize = window.innerWidth < 640 ? 12 : 14;

interface ProductFocusProps {
  product: IProduct;
}

const ProductFocus = ({ product }: ProductFocusProps) => {
  const {
    id,
    title,
    tags,
    price,
    discountedPrice,
    image,
    reviews,
    description,
    rating,
  } = product;
  const { addToCart } = useCart();
  return (
    <div className="relative w-fit md:w-full h-auto bg-accent/5 dark:bg-secondary/5 rounded-[10px] backdrop-blur p-1 flex flex-col md:flex-row gap-7 items-center justify-between outline outline-1 outline-primary z-30">
      <p className="text-primary text-[8px] absolute -top-4 tracking-[0.1rem] font-inter font-bold uppercase w-full text-center">
        {id}
      </p>
      <img
        src={image.url}
        alt={image.alt}
        className="z-10 w-[282px] md:w-[calc(50%-20px)] h-auto rounded-[8px] overflow-hidden aspect-square object-cover object-center"
      />
      {/* Info right side */}
      <div className="p-3 md:p-4 bg-secondary dark:bg-accent z-10 w-[282px] md:w-[calc(50%-20px)] h-auto rounded-[8px] flex flex-col items-start overflow-hidden aspect-square gap-2 md:gap-3 relative">
        <h2 className="text-[14px] md:text-[16px] lg:text-[20px] font-inter font-bold uppercase leading-4 md:leading-5 text-left tracking-[0.075rem] text-accent dark:text-secondary">
          {title}
        </h2>
        <div className="flex flex-row items-end justify-between w-full">
          {/* Tag and price */}
          <div className="w-fit h-full flex flex-col justify-between">
            <p className="bottom-[2px] right-0 text-[6px] md:text-[8px] font-inter font-bold uppercase tracking-[0.1rem] p-[2px] bg-blend-difference bg-primary text-accent dark:text-secondary">
              {tags.join("   |   ")}
            </p>
            <div className="flex items-center gap-1">
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
              <p className="font-micro text-[26px] md:text-[32px] lg:text-[40px] leading-3 text-accent dark:text-secondary">
                {discountedPrice
                  ? discountedPrice.toFixed(0)
                  : price.toFixed(0)}
              </p>
            </div>
          </div>

          {/* Rating and on sale */}
          <div className="w-fit h-full flex flex-col justify-between">
            <ul className="flex items-center justify-center gap-1 pb-3 md:pb-4">
              {Array.from({ length: 5 }, (_, index) => (
                <li key={index}>
                  <div className="w-[10px] h-[10px] md:w-3 md:h-3 bg-accent dark:bg-secondary rounded-full flex items-center justify-center">
                    {index < rating && (
                      <div className="w-[6px] h-[6px] md:w-2 md:h-2 bg-primary rounded-full z-10"></div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="w-full">
              {discountedPrice ? (
                <p className="text-[6px] md:text-[8px] text-center font-inter font-bold uppercase bg-primary text-accent dark:text-secondary p-[2px] w-full tracking-[0.1rem]">
                  On sale
                </p>
              ) : (
                <div className="w-full p-2"></div>
              )}
            </div>
          </div>
        </div>
        <p className="text-[8px] md:text-[12px] xl:text-[14px] text-left font-inter font-normal uppercase w-full tracking-[0.075rem] text-accent dark:text-secondary">
          {description}
        </p>
        {/* Reviews */}
        <div className="w-[calc(100%-24px)] md:w-full h-auto flex flex-col gap-1 md:gap-2 absolute md:static bottom-3 md:bottom-auto">
          <h3 className="text-[32px] md:text-[40px] font-micro leading-8 text-primary">
            Reviews
          </h3>
          <div className="w-full h-auto flex flex-row gap-2">
            <div className="w-full h-auto flex flex-col gap-1 justify-center md:justify-normal">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="text-[8px] md:text-[12px] xl:text-[14px] font-inter font-normal uppercase text-accent dark:text-secondary"
                >
                  <p>
                    <span className="text-primary">Username: </span>"
                    {review.username}"
                  </p>
                  <p>
                    <span className="text-primary">Rating: </span>
                    {review.rating}
                  </p>
                  <p>
                    <span className="text-primary">Description: </span>"
                    {review.description}"
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="32"
                  viewBox="0 0 31 32"
                  fill="none"
                >
                  <path
                    d="M12.5472 1.5835C14.1093 0.021399 16.6413 0.021399 18.2034 1.5835L29.5169 12.897C31.079 14.4591 31.079 16.9911 29.5169 18.5532L18.2034 29.8677C16.6414 31.4294 14.1092 31.4293 12.5472 29.8677L1.23273 18.5532C-0.328916 16.9912 -0.328989 14.459 1.23273 12.897L12.5472 1.5835ZM11.6028 11.3628L15.9642 15.7251L11.6028 20.0884L13.7239 22.2095L19.1478 16.7866L20.2083 15.7261L19.1478 14.6646L13.7239 9.2417L11.6028 11.3628Z"
                    fill="#F5542A"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="32"
                  viewBox="0 0 31 32"
                  fill="none"
                  className="rotate-180"
                >
                  <path
                    d="M12.5472 1.5835C14.1093 0.021399 16.6413 0.021399 18.2034 1.5835L29.5169 12.897C31.079 14.4591 31.079 16.9911 29.5169 18.5532L18.2034 29.8677C16.6414 31.4294 14.1092 31.4293 12.5472 29.8677L1.23273 18.5532C-0.328916 16.9912 -0.328989 14.459 1.23273 12.897L12.5472 1.5835ZM11.6028 11.3628L15.9642 15.7251L11.6028 20.0884L13.7239 22.2095L19.1478 16.7866L20.2083 15.7261L19.1478 14.6646L13.7239 9.2417L11.6028 11.3628Z"
                    fill="#F5542A"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-[-21px] md:bottom-[-26px] right-3 md:right-4 -z-10">
        <div className="flex flex-row gap-1 md:gap-2">
          <div className="relative group">
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
                className="fill-primary lg:group-hover:fill-secondary lg:dark:group-hover:fill-accent"
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
                className="fill-primary lg:group-hover:fill-secondary lg:dark:group-hover:fill-accent"
              />
            </svg>

            <button
              className="absolute transform -translate-y-5 md:-translate-y-6 left-1/2 -translate-x-1/2 text-[8px] md:text-[10px] p-1 text-accent dark:text-secondary font-inter uppercase font-semibold tracking-[0.075rem] w-full"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
          <div className="relative group">
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
                className="fill-secondary dark:fill-accent lg:group-hover:fill-accent lg:dark:group-hover:fill-secondary"
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
                className="fill-secondary dark:fill-accent stroke-secondary dark:stroke-accent lg:group-hover:fill-secondary/0 lg:dark:group-hover:fill-accent/0 lg:group-hover:stroke-primary"
              />
            </svg>
            <button className="absolute transform -translate-y-5 md:-translate-y-6 left-1/2 -translate-x-1/2 text-[8px] md:text-[10px] p-1 text-primary font-inter uppercase font-semibold tracking-[0.075rem] w-full">
              <div className="flex items-center justify-center gap-1">
                <p>Favourite</p>
                <StarFourIcon
                  color="#f5542a"
                  weight="bold"
                  size={starIconSize}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFocus;
