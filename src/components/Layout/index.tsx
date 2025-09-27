import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

function Layout() {
  return (
    <div>
      <Header />
      <main className="flex items-center justify-center md:h-[calc(100vh-80px)] h-screen bg-accent dark:bg-secondary md:m-10 m-0 md:rounded-3xl rounded-none overflow-hidden">
        <Outlet />
        <div className="absolute top-0 w-[calc(100%-80px)] h-full pointer-events-none hidden md:block">
          <div className="w-[1px] h-full bg-secondary dark:bg-accent mx-auto absolute left-[10%] xl:left-[25%]  "></div>
          <div className="w-[1px] h-full bg-secondary dark:bg-accent mx-auto absolute left-[50%]"></div>
          <div className="w-[1px] h-full bg-secondary dark:bg-accent mx-auto absolute left-[90%] xl:left-[75%]  "></div>
        </div>
      </main>
    </div>
  );
}

export default Layout;
