/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000000',
      'grey': '#EAEAEA',
      'purple': '#5E2E53',
      'pink': '#E1A1E9',
    },
    extend: {
      fontSize: {
        "large": "36px",
        "medium": "24px",
        "small": "18px",
      },
      lineHeight: {
        "large": "36px",
        "medium": "24px",
        "small": "18px",
      },
    },
  },
  plugins: [],
}
