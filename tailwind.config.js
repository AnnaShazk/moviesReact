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
