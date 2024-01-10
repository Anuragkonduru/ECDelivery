/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-white": "linear-gradient(45deg, #ff8a00, #e52e71, #6026d4)",
        "gradient-black": "linear-gradient(45deg, #333333, #424242, #616060)",
      },
    },
  },
  plugins: [],
};
