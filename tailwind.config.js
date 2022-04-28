module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        23.5: '5.875rem', // 94px
        26: '6.375rem', // 102px
        46: '11.5rem', // 184px
        88.5: '22.125rem', // 354px
        94: '23.312rem', // 373px
        100: '25rem', // 400px
        102: '26.25rem', // 420px
        119.25: '29.8125rem', // 477px
        120: '30rem', // 480px
        142: '35.5rem', // 568px
        248: '62rem', // 992px
        296.5: '74.125rem', // 1186px
      },
      height: {
        14.5: '3.625rem', // 58px
        15: '3.625rem',
        18: '4.5rem',
        22: '5.5rem', // 88px
        39: '9.75rem', // 156px
        89.5: '22.375rem', // 358px
        97: '24.75rem', // 396px
        100: '25rem', // 400px
        110.5: '27.625rem', // 442px
        125: '31.25rem', // 500px
        132.5: '33.125rem', // 530px
        139: '34.75rem', // 556px
        140: '35.0625rem', // 561px
        148: '37rem', // 592px
        158.5: '39.625rem', // 634px
        177.25: '44.3125rem', // 709px
        188.5: '47.125rem', // 754px
        189: '47.25rem', // 756px
      },
      padding: {
        13: '3.125rem', // 50px
        15: '3.75rem', // 60px
        25.25: '6.315rem', // 101px
        26.5: '6.625rem', // 106
        29: '7.375rem', // 118px
        38: '9.5rem', // 152px
        39: '9.75rem', // 156px
        40.5: '10.125rem', // 162px
        45: '11.25rem', // 180px
        83: '20.75rem', // 332px
      },
      fontSize: {
        '1.5xl': [
          '1.375rem', // 22px
          {
            lineHeight: '2rem', // 32px
          },
        ],
        '2.5xl': [
          '1.75rem', // 28px
          {
            lineHeight: '2.4375rem', // 39px
          },
        ],
        '5.5xl': [
          '3.5rem', // 56px
        ],
      },
      lineHeight: {
        14.5: '3.625rem', // 58px
      },
      gap: {
        21.5: '5.375rem', // 86px
        38: '9.5625rem', // 153px
        94: '23.312rem', // 373px
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
