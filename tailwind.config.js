// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8',        // Governor Bay
        'bg-dark': '#212121',      // Bunker
        'bg-light': '#F5F5F5',
        success: '#00C853',
        error: '#D32F2F',
        gold: '#D4AF37',
        white: '#FFFFFF'
      }
    }
  },
  plugins: []
};
