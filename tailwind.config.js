const defaultTheme = require("tailwindcss/defaultTheme");
const windmill = require("@windmill/react-ui/config");

//TODO: Set base theme font
module.exports = windmill({
  purge: ["src/**/*.js"],
  plugins: [
    // require("./tailwindcss/widths"),
    require("./src/tailwindcss/extend"),
    require("@ky-is/tailwindcss-plugin-width-height")({
      variants: ["responsive"],
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#f4f9ff",
          100: "#ebf2fd",
          200: "#c1d9f9",
          300: "#97bff7",
          400: "#3b85ed",
          500: "#2f80ed",
          600: "#2c7ae1",
          700: "#2766bd",
          800: "#194176",
          900: "#091a2f",
          950: "#02060c",
        },
        secondary: {
          50: "#e6fff6",
          100: "#b4fee5",
          200: "#82fdd4",
          300: "#50fcc3",
          400: "#04fba9",
          500: "#04e097",
          600: "#04c887",
          700: "#039665",
          800: "#026444",
          900: "#013222",
        },
        gray: {
          50: "#f4f7f8",
          100: "#d4dee3",
          200: "#94acb9",
          300: "#698b9d",
          400: "#3e6a81",
          500: "#295973",
          600: "#21475c",
          700: "#21475c",
          800: "#1d3e51",
          900: "#0E3346",
          950: "#081f2b",
        },
        error: {
          50: "#fef6f9",
          100: "#fbd0e2",
          200: "#f7a1c5",
          300: "#f372a8",
          400: "#f05194",
          500: "#ed2e7e",
          600: "#dd1368",
          700: "#ca115f",
          800: "#a40e4d",
          900: "#8d0c42",
        },
        success: {
          50: "#e6fef6",
          100: "#cdfeec",
          200: "#9cfcd9",
          300: "#83fcd0",
          400: "#38fab4",
          500: "#05c680",
          600: "#04ae71",
          700: "#049560",
          800: "#036340",
          900: "#024b30",
        },
        warning: {
          50: "#fef6e7",
          100: "#fcedcf",
          200: "#fadb9e",
          300: "#f8d186",
          400: "#f7c86e",
          500: "#f4b740",
          600: "#f2a40d",
          700: "#d9940c",
          800: "#a97309",
          900: "#795207",
        },
      },
      boxShadow: {
        bottom:
          "0 5px 6px -7px rgba(0, 0, 0, 0.6), 0 2px 4px -5px rgba(0, 0, 0, 0.06)",
      },
    },
  },
});
