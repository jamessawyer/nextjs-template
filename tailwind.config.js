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
        102: '26.25rem', // 420px
        142: '35.5rem', // 568px
      },
      height: {
        14.5: '3.625rem', // 58px
        15: '3.625rem',
        18: '4.5rem',
        22: '5.5rem', // 88px
        39: '9.75rem', // 156px
        89.5: '22.375rem', // 358px
        97: '24.75rem', // 396px
        110.5: '27.625rem', // 442px
        140: '35.0625rem', // 561px
        148: '37rem', // 592px
        189: '47.25rem', // 756px
      },
      padding: {
        13: '3.125rem', // 50px
        15: '3.75rem', // 60px
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
      },
      lineHeight: {
        14.5: '3.625rem', // 58px
      },
      gap: {
        38: '9.5625rem', // 153px
        94: '23.312rem', // 373px
      },
    },
  },
  plugins: [],
}
