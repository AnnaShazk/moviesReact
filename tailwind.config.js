/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backdropFilter: ["blur(20px)"],
    },
    screens: {
      xs: "425px",
      xxs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      xxxl: "2560px",
    },
  },
  variants: {
    extend: {
      backdropFilter: ["responsive"], // or other variants you need
    },
  },
  plugins: [
    // ...
    require("flowbite/plugin"),
    require("tailwindcss-filters"),
  ],
};
