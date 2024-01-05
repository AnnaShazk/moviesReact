/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // ...
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: "class",
  plugins: [
    // ...
    require("flowbite/plugin"),
  ],
};
