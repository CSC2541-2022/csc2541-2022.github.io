const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class',
  theme: {
    colors: {
    'white': {
      DEFAULT: '#FFFFFF'
    },
    'dove-gray': {
      DEFAULT: '#616161',
      '50': '#EBEBEB',
      '100': '#DBDBDB',
      '200': '#BDBDBD',
      '300': '#9E9E9E',
      '400': '#808080',
      '500': '#616161',
      '600': '#424242',
      '700': '#242424',
      '800': '#050505',
      '900': '#000000'
    },
    'link-blue': {
      DEFAULT: '#0020C2',
      '50': '#D6DDFF',
      '100': '#B8C4FF',
      '200': '#7A91FF',
      '300': '#3D5EFF',
      '400': '#002BFF',
      '500': '#0020C2',
      '600': '#001685',
      '700': '#000C47',
      '800': '#00020A',
      '900': '#000000'
    },
    green: colors.green,
    black: colors.black,
    yellow: colors.yellow
  },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
