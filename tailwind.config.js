/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
// ./tailwind.config.js

module.exports = {
  content: ['./app/**/*.hbs'],
  theme: {
    colors: {
    'chartreuse' : '#7FFF00',
    'white' : '#FFFFFF',
    'black' : '#000000',
    'middlegray' : '#cacfe0',
    'lightgray' : '##eaecf3',
    'lightblue' : '#BAE6FD',
    'middleblue' : '#0f70b7',
    'nightblue': '#1E40AF',
    'darkblue' : '#001626',
    'red' : '#DC2626',
    'yellow' : '#FACC15',
    'orange' : '#F97316',
    'green' : '#10B981'

},
    extend: {
      spacing: {
        128: '32rem'
      }
    },
  },
  plugins: [],
}