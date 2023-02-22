/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      'dark-orange' : '#DF6951',
      'orange' : '#FEBA0A',
      'dark-blue' : '#3B50A2',
      'gray' : '#9c9c9c',
      'black' : '#181818',
      'white' : '#ffffff'
    }
  },
  plugins: [],
}