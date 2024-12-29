/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'customLight': '#f1faee',
        'costomLightBlue': '#a8dadc',
        'costomMidBlue': '#457b9d',
        'costomHighBlue': '#1d3557',
         
      },
    },
  },
  plugins: [],
}

