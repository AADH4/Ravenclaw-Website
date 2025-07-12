/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "body-text": "var(--body-text-font-family)",
        subheading: "var(--subheading-font-family)",
        "subheadline-regular": "var(--subheadline-regular-font-family)",
        title: "var(--title-font-family)",
      },
      boxShadow: {
        "button-shadow": "var(--button-shadow)",
      },
    },
  },
  plugins: [],
};
