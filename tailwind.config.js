/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slideright: "slideright 1s",
        slideLeft: "slideleft 1s",
        
      },
      keyframes: {
        slideright: {
          "0%": { transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "none" },
        },
        slideleft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "none" },
        },
      },
    },
  },
};
