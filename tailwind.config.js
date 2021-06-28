module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "main-blue": "#2CC1F9",
        "main-gray": "hsl(210, 4%, 67%)",
        "main-yellow": "hsl(51, 100%, 49%)",
        "main-red": "hsl(7, 99%, 70%)",
        "dark-sat-cyan": "hsl(167, 40%, 24%)",
      },
      backgroundImage: (theme) => ({
        "orange-header-sm": "url('./images/mobile/image-header.jpg')",
        "orange-header-md": "url('./images/desktop/image-header.jpg')",
      }),
    },
    fontFamily: {
      barlow: ['"Barlow"', "sans-serif"],
      fraunces: ['"Fraunces"', "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
