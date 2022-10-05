/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'grey': '#EAEAEA',
      'purple': '#5E2E53',
      'pink': '#E1A1E9',
      'grey-faded': 'rgba(234, 234, 234, 0.3)',
      'purple-faded': 'rgb(94, 46, 83, 0.5)',
      'pink-faded': 'rgba(225, 161, 233, 0.8)',
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
