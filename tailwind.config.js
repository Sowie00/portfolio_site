/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        fadeInTop: "fadeInTop 1s ease-in",
        fadeInLeft: "fadeInLeft 1s ease-in",
        fadeInRight: "fadeInRight 1s ease-in",
        fadeInBottom: "fadeInBottom 1s ease-in",
      },

      keyframes: {
        fadeInTop: {
          from: { opacity: "0", transform: "translateY(-300px)" },
          to: { opacity: "1" },
        },
        fadeInLeft: {
          from: {
            opacity: "0",
            transform: "translateX(-300px)",
          },
          to: { opacity: "1" },
        },
        fadeInRight: {
          from: { opacity: "0", transform: "translateX(300px)" },
          to: { opacity: "1" },
        },
        fadeInBottom: {
          from: { opacity: "0", transform: "translateY(300px)" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
