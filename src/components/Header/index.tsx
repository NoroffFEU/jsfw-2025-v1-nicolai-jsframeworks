import React from "react";
import { Link } from "react-router-dom";
import DarkToggle from "../DarkToggle";
import ScrollNav from "../ScrollNav";
import NameNav from "../NameNav";

function Header() {
  return (
    <header className="text-white h-screen p-4 fixed top-0 left-0 right-0 pointer-events-none z-50">
      <nav>
        <Link
          to="/"
          className="uppercase font-iceland text-xl tracking-[0.4rem] md:tracking-[0.75rem] w-fit text-primary md:text-accent md:dark:text-secondary md:-rotate-90 absolute md:left-9 md:top-1/2 transform md:-translate-x-1/2 z-10 md:-translate-y-1/2 top-[52px] left-1/2 -translate-x-1/2 pointer-events-auto transition-colors duration-500"
        >
          A.Warehouse
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="362"
          viewBox="0 0 31 362"
          fill="none"
          className="absolute left-10 hidden md:block transform top-1/2 -translate-y-1/2"
        >
          <path
            d="M0 0.652344C2.27825e-05 3.25859 1.99418 6.38467 3.15918 7.5498L26.4717 30.8633C29.0518 33.4434 30.5 36.9445 30.5 40.5908V321.409C30.5 325.056 29.0518 328.557 26.4717 331.137L3.15918 354.45C1.99418 355.615 2.27824e-05 358.741 0 361.348V0.652344Z"
            className="svg-theme"
          />
        </svg>
        <NameNav />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="504"
          height="31"
          viewBox="0 0 504 31"
          fill="none"
          className="absolute hidden md:block top-0 md:top-10 transform left-1/2 -translate-x-1/2"
        >
          <path
            d="M503.22 -0.000244141C500.614 -0.000244141 497.488 1.99392 496.322 3.15894L473.009 26.4714C470.429 29.0515 466.928 30.4997 463.281 30.4998H40.7189C37.0726 30.4997 33.5714 29.0515 30.9913 26.4714L7.67786 3.15894C6.51272 1.99392 3.38666 -0.000243913 0.780396 -0.000244141H503.22Z"
            className="svg-theme"
          />
        </svg>
        {/* Mobile */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="272"
          height="47"
          viewBox="0 0 272 47"
          fill="none"
          className="absolute block md:hidden top-0 md:top-10 transform left-1/2 -translate-x-1/2"
        >
          <path
            d="M271.529 0C267.576 0 262.834 3.02413 261.067 4.79102L225.709 40.1494C221.796 44.0624 216.486 46.2578 210.956 46.2578H60.6792C55.1489 46.2578 49.8384 44.0615 45.9253 40.1484L10.5669 4.79102C8.79983 3.02413 4.05874 0.000132117 0.105957 0H271.529Z"
            className="svg-theme"
          />
        </svg>
        <ScrollNav />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="318"
          viewBox="0 0 31 318"
          fill="none"
          className="absolute right-10 hidden md:block transform top-1/2 -translate-y-1/2"
        >
          <path
            d="M31 317.263C31 314.656 29.0058 311.529 27.8408 310.364L4.52734 287.052C1.94743 284.472 0.499153 280.97 0.499023 277.324L0.5 141.758V40.6768C0.5 37.0305 1.94732 33.5283 4.52734 30.9482L27.8408 7.63574C29.0058 6.47071 31 3.34366 31 0.737305V317.263Z"
            className="svg-theme"
          />
        </svg>
        <DarkToggle />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="158"
          height="31"
          viewBox="0 0 158 31"
          fill="none"
          className="absolute md:bottom-10 transform md:left-1/2 md:-translate-x-1/2 rotate-90 md:rotate-0 -left-[64px] md:-left-auto top-24 md:top-auto"
        >
          <path
            d="M80.8887 0.499023V0.5H117.677C121.323 0.500073 124.824 1.94831 127.404 4.52832L150.717 27.8408C151.882 29.0058 155.009 31 157.615 31H63.6348V30.999H0.384766C2.99115 30.999 6.11724 29.0048 7.28223 27.8398L30.5957 4.52734C33.1758 1.94735 36.677 0.499023 40.3232 0.499023H80.8887Z"
            className="svg-theme"
          />
        </svg>
      </nav>
    </header>
  );
}

export default Header;
