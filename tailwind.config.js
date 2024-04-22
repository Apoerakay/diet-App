/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: { 
       keyframes: {
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden"
        },
        "100%": {
          width: "100%"
        }
      },
      blink: {
        "10%": {
          borderColor: "transparent"
        },
        "100%": {
          borderColor: "transparent"
        }
      }
    },
    animation: {
      typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
    }},
  },
  plugins: [],
}


