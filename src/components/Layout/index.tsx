import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

function Layout() {
  return (
    <div>
      <Header />
      <main className="flex items-center justify-center md:h-[calc(100vh-80px)] h-screen bg-gray-500 md:m-10 m-0 md:rounded-3xl rounded-none overflow-x-hidden overflow-y-scroll">
        <Outlet />
        <div className="absolute top-0 w-[calc(100%-80px)] h-full pointer-events-none hidden md:block">
          <div className="w-[1px] h-full bg-secondary dark:bg-accent mx-auto absolute left-[25%] transition-colors duration-500"></div>
          <div className="w-[1px] h-full bg-secondary dark:bg-accent mx-auto absolute left-[50%] transition-colors duration-500"></div>
          <div className="w-[1px] h-full bg-secondary dark:bg-accent mx-auto absolute left-[75%] transition-colors duration-500"></div>
        </div>
      </main>
    </div>
  );
}

export default Layout;
