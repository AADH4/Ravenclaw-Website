/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-background-brand-default":
          "var(--color-background-brand-default)",
        "color-background-brand-hover": "var(--color-background-brand-hover)",
        "color-border-brand-default": "var(--color-border-brand-default)",
        "color-primitives-brand-300": "var(--color-primitives-brand-300)",
        "color-text-brand-on-brand": "var(--color-text-brand-on-brand)",
        "colors-black-800": "var(--colors-black-800)",
        "colors-text-default-default": "var(--colors-text-default-default)",
      },
      fontFamily: {
        "body-text": "var(--body-text-font-family)",
        "single-line-body-base": "var(--single-line-body-base-font-family)",
        subheading: "var(--subheading-font-family)",
        "subheadline-regular": "var(--subheadline-regular-font-family)",
      },
      boxShadow: {
        "button-shadow": "var(--button-shadow)",
      },
    },
  },
  plugins: [],
};
