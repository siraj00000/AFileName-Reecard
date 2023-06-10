module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#1890FF',
      secondary: '#D9D9D9',
      black: '#000',
      blackSec: '#242634',
      white: '#fff'
    },
    fontFamily: {
      karla: ['var(--font-karla)'],
      inter: ['var(--font-inter)'],
      manrope: ['var(--font-manrope)'],
    },
    extend: {
      scrollbar: {
        width: "6px",
        height: "6px",
        track: "#f1f1f1",
        thumb: "#888",
      },
      fontSize: {
        14: "14px",
        11: "11px",
      },
      boxShadow: {
        card: " 4px 4px 20px rgba(25, 39, 89, 0.16)",
        cardDark: "4px 4px 20px rgba(25, 39, 89, 0.36)",
      },
      height: {
        "90vh": "90vh",
        "80vh": "80vh",
      },
      screens: {

        xs: { max: "600px" },
        sm: { max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },

        lg: { max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
