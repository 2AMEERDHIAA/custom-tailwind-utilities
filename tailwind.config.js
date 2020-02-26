/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {},
  variants: {
    fontSize: ['hover','responsive','focus']
},
plugins: [
  plugin(function({ addUtilities }) {
    const newUtilities = {
      'text-lg': {
        fontSize: '1.25rem',
      },
      '.rotate-90': {
        transform: 'rotate(90deg)',
      },
      '.rotate-180': {
        transform: 'rotate(180deg)',
      },
      '.rotate-270': {
        transform: 'rotate(270deg)',
      },
    }
    addUtilities(newUtilities, ['responsive', 'hover'])
  })
]
};
