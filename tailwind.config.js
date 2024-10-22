/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBlue: "#274C5B",
        lightGreen: "#7EB693",
        lightGray: "#D4D4D4",
        offWhite: "#F9F8F8",
        softGreen: "#EFF6F1",
        C6: "#525C60",
        yellow: "#EFD372",
        B8: "#B8B8B8",
        F1: "#F1F1F1",
        F2: "#F1F8F4",
        smoke: "#ECECEC"
      },
      container:{
        center: true,
        padding: "0",
        margin: "0 auto",
        screens:{
          lg: '1240px',
        }
      },
      fontFamily: {
        'opensans': ['Open Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'yellowtail': ['Yellowtail', 'cursive'],
      },
      fontSize:{
        h1:{

        }
      }
    },
  },
  plugins: [],
}