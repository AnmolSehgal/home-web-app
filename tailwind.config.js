module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
        text: {
          DEFAULT: "#B6B8B8",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#EAEAEA",
          400: "#D0D1D1",
          500: "#B6B8B8",
          600: "#9C9F9F",
          700: "#828686",
          800: "#696C6C",
          900: "#505252",
        },
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
