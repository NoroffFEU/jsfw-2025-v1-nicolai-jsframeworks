import React from "react";
import { useState, useEffect } from "react";

function DarkToggle() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (prefersDark) {
      setChecked(true);
      document.documentElement.classList.add("dark");
    } else {
      setChecked(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    if (isChecked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <label className="cursor-pointer absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2 rotate-90 md:rotate-0 top-[100px] md:top-auto -left-[17px] z-10 pointer-events-auto">
      <input
        type="checkbox"
        id="toggle"
        checked={checked}
        onChange={toggleDarkMode}
        className="hidden peer"
      />
      <div className="w-16 h-5 md:w-16 md:h-6 bg-accent rounded-full flex items-center p-1 !duration-300 peer-checked:bg-primary">
        <div
          className={`w-3 h-3 md:w-4 md:h-4 bg-secondary rounded-full transform transition-transform !duration-300 ${
            checked ? "translate-x-11 md:translate-x-10" : "translate-x-0"
          }`}
        ></div>
      </div>
    </label>
  );
}

export default DarkToggle;
