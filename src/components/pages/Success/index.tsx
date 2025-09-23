import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <section
      className="bg-accent dark:bg-secondary w-full h-full transition-colors duration-500 flex items-center justify-center "
      aria-label="Success section"
    >
      <div className="flex flex-row items-end justify-between w-full p-5 md:w-1/2 z-20">
        <div className="w-full flex flex-col items-center md:items-baseline gap-10">
          <div className="w-full flex flex-col-reverse gap-14 md:gap-0 md:flex-row items-center justify-between">
            <h1
              className="text-[100px] md:text-[128px] font-bold text-primary leading-[10px] md:leading-[70px] uppercase font-micro w-1/2"
              aria-label="Success"
            >
              Succ&shy;ess
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 160 161"
              fill="none"
              className="w-3/5 max-w-[220px] md:max-w-none md:w-[calc(50%-20px)] md:h-[160px]"
            >
              <path
                d="M71.5146 3.93652C76.2009 -0.749768 83.7991 -0.749768 88.4854 3.93652L156.367 71.8184C161.053 76.5046 161.053 84.1028 156.367 88.7891L88.4854 156.672C83.7991 161.358 76.2009 161.358 71.5146 156.672L3.63281 88.7891C-1.05348 84.1028 -1.05348 76.5047 3.63281 71.8184L71.5146 3.93652ZM68.9736 90.5518L56.7412 78.3203L52.1455 82.916L47.5498 87.5127L68.9746 108.938L73.5703 104.341L112.451 65.4609L107.854 60.8643L103.259 56.2676L68.9736 90.5518Z"
                fill="#F5542A"
              />
            </svg>
          </div>

          <p className="bodytext text-secondary dark:text-accent text-center md:text-left w-[280px] md:w-[40%]">
            Your order is now on the way. Please check your email for the
            receipt.
            <br></br>
            <br></br>
            Thank you for shopping at a.warehouse.
            <br></br>
            <br></br>
            <Link
              to="/products"
              className="underline text-primary hover:text-accent transition-colors duration-500"
            >
              Back to products.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Success;
