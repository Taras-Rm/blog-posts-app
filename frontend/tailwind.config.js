/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        transform: "transform",
      },
      transitionDuration: {
        300: "300ms",
      },
      transitionTimingFunction: {
        "ease-in-out": "ease-in-out",
      },
      colors: {
        primary: "#22c55e",
        "primary-dark": "#16a34a"
      },
    },
  },
  plugins: [],
};
