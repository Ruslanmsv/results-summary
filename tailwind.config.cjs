/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      lg: "1440px",
    },
    colors: {
      
      red: "hsl(0, 100%, 67%)",
      yellow: "hsl(39, 100%, 56%)",
      green: "hsl(166, 100%, 37%)",
      "cobalt-blue": "hsl(234, 85%, 45%)",
      white: "hsl(0, 0%, 100%)",
      "pale-blue": "hsl(221, 100%, 96%)",
      lavender: "hsl(241, 100%, 89%)",
      "dg-blue": "hsl(224, 30%, 27%)",
      "ls-blue": "hsl(252, 100%, 67%)",
      "lr-blue": "hsl(241, 81%, 54%)",
      "violet-blue": "hsla(256, 72%, 46%, 1)",
      "persian-blue": "hsla(241, 72%, 46%, 0)",
    },
    backgroundImage: {
      'gradient': 'linear-gradient(180deg, #7755FF 0%, #6943FF 0.01%, #2F2CE9 100%)',
      'score-gradient': 'linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0) 100%, rgba(37, 33, 201, 0) 100%)',
      'item-gradient': 'linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95))',
    },
    fontFamily: {
      hanken: ["Hanken Grotesk", "sans-serif"],
    },
    fontSize: {
      sm: ["16px", { lineHeight: "21px" }],
      md: ["18px", { lineHeight: "23px" }],
      lg: ["24px", { lineHeight: "31px" }],
      xl: ["32px", { lineHeight: "42px" }],
      xxl: ["56px", { lineHeight: "72px" }],
      "7xl": ["72px", { lineHeight: "72px" }],
    },
    boxShadow: {
      "custom-xl": "0px 30px 60px rgba(61, 108, 236, 0.15)",
    },
    extend: {
      borderRadius: {
        '4xl': "32px",
      },
    },
  },
  plugins: [],
};
