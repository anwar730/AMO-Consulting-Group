/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      // transparent: 'transparent',
      // current: 'currentColor',
      // 'white': '#ffffff',
      // 'purple': '#3f3cbb',
      // 'midnight': '#121063',
      // 'metal': '#565584',
      // 'tahiti': '#3ab7bf',
      // 'silver': '#ecebff',
      // 'bubble-gum': '#ff77e9',
      // 'bermuda': '#78dcca',
      "lightBlue":   'rgb(234, 245, 253)',
      "lightred":'rgb(255, 239, 240)',
      "lightgreen":'rgb(230, 255, 243)',
      "lightYellow":'rgb(255, 244, 229)',
      "blue":"#499ede"
    },
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1020px",
      xl:"1440px"
    },
    extend: {},
  },
  plugins: [],
}

