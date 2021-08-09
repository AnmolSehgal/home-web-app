module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        DEFAULT: "#DE5212",
        50: "#FCE4DA",
        100: "#FAD4C2",
        200: "#F6B293",
        300: "#F29064",
        400: "#EF6F34",
        500: "#DE5212",
        600: "#AF410E",
        700: "#802F0A",
        800: "#501E07",
        900: "#210C03",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
