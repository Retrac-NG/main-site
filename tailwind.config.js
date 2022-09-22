/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],

  theme: {
    fontFamily: {
      primary: "'Roboto Serif',serif",
      secondary: "'Lora', serif",
    },

    extend: {
      backgroundImage: {
        'landing-hero-bg':
          "url(  'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')",
      },
    },
  },
  plugins: [],
};
