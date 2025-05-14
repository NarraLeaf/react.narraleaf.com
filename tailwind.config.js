/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
  './src/**/*.{js,jsx,ts,tsx,md,mdx}'
];
export const darkMode = 'class';
export const theme = {
  extend: {
    colors: {
      primary: {
        100: "#E0F7FA",
        200: "#B2EBF2",
        300: "#80DEEA",
        400: "#4DD0E1",
        500: "#40A8C4",
        600: "#0097A7",
        700: "#00838F",
        800: "#006064",
        900: "#004D5B",
        default: "#40A8C4",
      }
    }
  }
};
export const plugins = [];