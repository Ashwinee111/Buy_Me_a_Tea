/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e7eceff6",
      },
      fontFamily: {
        primary: ["Work Sans", "sans-serif"],
        secondary: ["Dancing Script", "cursive"],
      },
      keyframes: {
        wiggle: {
          "0%,100%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
