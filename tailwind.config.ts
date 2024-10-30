/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [ './src/**/*.{js,jsx,ts,tsx}' ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1600px'
    },
    extend: {
      backgroundImage: {
        primaryGradient: 'linear-gradient(163deg, #2F2284 0.45%, #38299E 55.62%, #533DEA 99.2%)'
      },
      colors: {
        sectionColor:"#070707",
        primary: {
          DEFAULT: '#FFD60A',
          dark: '#EFBE03',
        },
        secondary:{
          main:'#1890FF',
          light:'#BAE7FF',
          dark:'#002766',
        },

        neutral:'#888',
        neutralLightest:'#E7E7E7',
        neutralDarker:'#5D5D5D',
        caption:'#5C5E65',


        blue: {
          DEFAULT: '#299CDD',
          light: '#DFF0FA'
        },

      },
      boxShadow: {
        1: '0 4px 4px 0 rgba(83, 61, 234, .20)',
        2: '0 2px 6px 0 rgba(0, 0, 0, .06)',
        3: '0 6px 6px 0 rgba(0, 0, 0, .25)',
        4: '0 8px 8px 0px rgba(0, 0, 0, .25);',
        5: '0 12px 12px 0 rgba(0, 0, 0, 0.25)',
        6: '0 -2px 4px 0 rgba(0, 0, 0, 0.06)',
        7: '0 25px 7px 0 rgba(0, 0, 0, 0.00), 0 16px 6px 0 rgba(0, 0, 0, .01), 0 9px 5px 0 rgba(0, 0, 0, .05), 0 4px 4px 0 rgba(0, 0, 0, .09), 0 1px 2px 0 rgba(0, 0, 0, .10), 0 0 0 0 rgba(0, 0, 0, .10)',
        8: '0 66px 18px 0 rgba(0, 0, 0, 0.00), 0 42px 17px 0 rgba(0, 0, 0, 0.01), 0 24px 14px 0 rgba(0, 0, 0, 0.05), 0 11px 11px 0 rgba(0, 0, 0, 0.09), 0 3px 6px 0 rgba(0, 0, 0, 0.10), 0 0 0 0 rgba(0, 0, 0, 0.10)'
      },
      spacing: {
        2: '2px',
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        26: '26px',
        28: '28px',
        30: '30px',
        32: '32px',
        40: '40px',
        42: '42px',
        48: '48px',
        56: '56px',
        64: '64px',
        80: '80px',
        120: '120px',
        128: '128px',
        160: '160px'
      },
      borderRadius: {
        2: '2px',
        4: '4px',
        8: '8px',
        16: '16px',
        24: '24px',
        32: '32px',
        64: '64px'
      },
      fontSize: {

        h1: [ '5rem', { lineHeight: 'normal', fontWeight: 900 } ],
        h2: [ '2rem', { lineHeight: 'normal', fontWeight: 400 } ],
        h3: [ '2rem', { lineHeight: 'normal', fontWeight: 800 } ],
        buttonTextSmall: [ '1.25rem', { lineHeight: 'normal', fontWeight: 500 } ],
        buttonTextLarge: [ '1.75rem', { lineHeight: 'normal', fontWeight: 400 } ],
        bodyText1: [ '1.25rem', { lineHeight: 'normal', fontWeight: 400 } ],
        bodyText2: [ '1.5rem', { lineHeight: 'normal', fontWeight: 400 } ],
        bodyXxg: [ '1rem', { lineHeight: 'normal', fontWeight: 400 } ],
        bodyXm: [ '.875rem', { lineHeight: 'normal', fontWeight: 400 } ],
        bodyMd: [ '1rem', { lineHeight: 'normal', fontWeight: 500 } ],
        bodyLg: [ '.75rem', { lineHeight: 'normal', fontWeight: 400 } ],
        bodySm: [ '.875rem', { lineHeight: 'normal', fontWeight: 400 } ],
        buttonSm: [ '.875rem', { lineHeight: 'normal', fontWeight: 500 } ],
        captionMd: [ '.75rem', { lineHeight: '180%', fontWeight: 500 } ],
        captionLg: [ '.75rem', { lineHeight: '180%', fontWeight: 700 } ],
        captionExtraLg: [ '.875rem', { lineHeight: '180%', fontWeight: 500 } ],

      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
        999: '999'
      },
      opacity: {
        9: '0.9'
      },
      fontFamily:{
        cairo:'var(--cairo)',
        poppins:'var(--poppins)',
      }
    }
  },
  darkMode: 'class',

};
