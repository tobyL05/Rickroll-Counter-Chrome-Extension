/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#dfe5f2',
        main: '#88aaee',
        mainAccent: '#9e66ff', // not needed for shadcn
      },
      borderRadius: {
        base: '5px'
      },
      boxShadow: {
        base: '4px 4px 0px 0px rgba(0,0,0,1)',
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '4px',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
      fontFamily: {
        "inter" : ["Inter","sans-serif"],
        "public-sans": ["Public Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

