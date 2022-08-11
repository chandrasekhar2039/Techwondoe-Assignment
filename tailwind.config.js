/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#FFFFFF',
      secondary: '#100720',
      orange:'#E6692E'
    },
    fontFamily: {
      primary:['Poppins']
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class'
}
