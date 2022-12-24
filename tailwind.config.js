/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        MontSerrat: ["Montserrat"],
        Avenir: ["Avenir"],
      },
      colors: {
        lightBeige: "#ede4e064",
        brown: "#9F8772",
        darkBrown: "#665A48",
        lightGreen: "#C8DBBE",
      },
    },
  },
  plugins: [],
};
