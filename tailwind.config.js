/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0165FE",
        "primary-dark": "#0152E0",
        secondary: "#FB6800",
        black: "#000000",
        "black-100": "#1C1C1C",
        "black-200": "#333333",
        "black-300": "#4D4D4D",
      },
    },
  },
  plugins: [],
};
