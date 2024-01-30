import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/*.{html,js}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    colors: {
      sand: "#B6652F",
      "sand-light": "#FFD8BE",
      ocean: "#217182",
      peach: "#F180A6",
      "sand-alt": "#EDC1A9",
      "peach-dark": "#CA6E84",
      "peach-light": "#F5C4EA",
      ...colors,
    },
    extend: {
      maxWidth: {
        "8xl": "1440px",
        "9xl": "1512px",
        "10xl": "1680px",
      },
    },
    plugins: [],
  },
};
export default config;
