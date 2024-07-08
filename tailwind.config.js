/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1620px",
      // => @media (min-width: 1536px) { ... }
      "4xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      colors: {
        "primary-color": "#1F9F90",
        "secondary-color": "#D9F1EE",
        "neutral-color": "#757575",
        primary1: "#1F9F90",
        primary2: "#222222",
        primary3: "#FFBB38",
        secondary1: "#EF262C",
        secondary2: "#797979",
        secondary3: "#1D1D1D",
      },
    },
  },
  plugins: [],
};
