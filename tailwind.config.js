/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#FFFFFF',
      secondary: '#1B2430',
      orange:'#E6692E'
    },
    fontFamily: {
      primary:['Poppins']
    },
    extend: {},
  },
  plugins: []
}
