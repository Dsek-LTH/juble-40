/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        råsa: "#f280a1",
        lila: "#9966cc",
      },

      // that is animation class
      animation: {
        fade: "fadeIn 0.5s ease-in-out",
      },
      // that is actual animation
      keyframes: (theme) => ({
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};
