/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        wobble: "shake 1.5s linear infinite",
      },
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0) rotate(-10deg)",
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0, 0) rotate(0deg)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0) rotate(0deg)",
          },
          "40%, 60%": {
            transform: "translate3d(4px, 0, 0) rotate(10deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
