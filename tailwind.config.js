/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
// ./tailwind.config.js

module.exports = {
  content: ['./app/**/*.hbs'],
  theme: {

    extend: {
      spacing: {
        128: '32rem',
        160: '40rem',
        184: '52rem',
        256:'104rem'
      },
      colors: {
        'chartreuse': '#7FFF00',
        'middlegray' : '#cacfe0',
        'lightgray' : '##eaecf3',
        'lightblue' : '#BAE6FD',
        'middleblue' : '#0f70b7',
        'nightblue': '#1E40AF',
        'darkblue' : '#001626',   
      },
    },
  },
  plugins: [],
}