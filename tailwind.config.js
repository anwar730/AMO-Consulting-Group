/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "cardColor": '#F5F5F5',
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

