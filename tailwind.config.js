/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        "primary-600": "#65A8FB",
        "primary-500": "#3D93FF",
        "primary-400": "#1678F2",
        "primary-300": "#3A8EF6",
        "primary-200": "#6F3AFA",
        "primary-100": "#4461F2",
        "secondary-600": "#EAF0F7",
        "secondary-500": "#000000",
        "secondary-400": "#D9D9D9",
        "secondary-300": "#4F555A",
        "secondary-200": "#8A8585",
        "secondary-100": "#F3F3FD",
        "teritary-600": "#FFFFFF",
        success: "#004D44",
        error: "#AC1A2F",
        caution: "#CF7600",
      },
      fontFamily: {
        primary: ["Satoshi", ...defaultTheme.fontFamily.sans],
        secondary: ["Silkscreen", ...defaultTheme.fontFamily.sans],
        tertiary: ["Pacifico", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
