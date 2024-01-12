/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary : "#042B20",
        secondary: "#F4FFFB",
        green: "#CAFBD5",
        greenPastel: "#78A89A",

      },
      fontFamily: {
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui'],
      },


    fontSize: {
        heading:  "74px",
        subHeading: "24px",
        menuItem: "17.619px",
        heading3: "32px",
        heading2: "44px"
      },

      fontWeight: {
        heading: "700",
        subHeading: '200',
        menuItem: "500",
        heading3: '500',
        heading2: '500',
      },

      lineHeight: {
        heading: '88.8px',
        subHeading: '33.6px',
        menuItem: "21.143px",
        heading3: "38px",
        heading2: "66px",
      },

      letterSpacing: {
        heading: '0.74px',
        subHeading: '0.01em',
        menuItem: "0.176px",
        heading3: "0.01em",
      }

    },
  },
  plugins: [],
}