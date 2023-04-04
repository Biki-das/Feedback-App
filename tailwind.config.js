/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slideright: "slideright 1.5s ease-in-out",
        slideLeft: "slideleft 1.5s ease-in-out",
      },
      keyframes: {
        slideleft: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { opacity: "1", transform: "none" },
        },
        slideright: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { opacity: "1", transform: "none" },
        },
      },
    },
  },
  plugins: [],
};
