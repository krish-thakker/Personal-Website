// tailwind.config.js
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        myBlue: "#4a86e8",
        myGray: "#262626",
      },
    },
    // **Override** the default sans with Montserrat
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
