/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
  variants: {
    extend: {
      backgroundColor: ["dark", "hover", "focus"],
      borderColor: ["dark", "hover", "focus"],
    },
  },
};

