/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#F5542A",
        secondary: "#EBEBEB",
        accent: "#080808",
      },
      fontFamily: {
        micro: ['"Micro 5"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
        iceland: ["Iceland", "sans-serif"],
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
