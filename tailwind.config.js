/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
      "node_modules/flowbite-react/lib/esm/**/*.js",
    ],
  darkMode: "class",
  plugins: [
    // ...
    require("flowbite/plugin"),
  ],
};
