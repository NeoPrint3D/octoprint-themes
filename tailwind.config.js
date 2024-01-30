const daisyui = require("daisyui");
const themes = require("daisyui/src/theming/themes");
const themeName = "night";
export const colors = themes[themeName];
console.log(colors);
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Space Grotesk", "monospace"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [themeName],
  },
};
