module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        26: '6.375rem', // 102px
        94: '23.312rem', // 373px
        102: '26.25rem', // 420px
      },
      height: {
        15: '3.625rem',
        18: '4.5rem',
        22: '5.5rem', // 88px
        39: '9.75rem', // 156px
        97: '24.75rem', // 396px
        140: '35.0625rem', // 561px
      },
      padding: {
        13: '3.125rem', // 50px
        15: '3.75rem', // 60px
        29: '7.375rem', // 118px
        39: '9.75rem', // 156px
      },
    },
  },
  plugins: [],
}
