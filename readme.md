# closest-css-color

Find the closest CSS color keyword for a given hex color value.

[![npm version](https://img.shields.io/npm/v/closest-css-color.svg)](https://www.npmjs.com/package/closest-css-color)
[![Build status](https://travis-ci.org/juliuste/closest-css-color.svg?branch=master)](https://travis-ci.org/juliuste/closest-css-color)
[![License](https://img.shields.io/github/license/juliuste/closest-css-color.svg?style=flat)](license)
[![Contact me](https://img.shields.io/badge/contact-email-turquoise)](mailto:mail@juliustens.eu)

## Installation

```bash
npm install --save closest-css-color
```

## `closestColor(hex, { detailed = false }})`
```js
const closestColor = require('closest-css-color')

// normal usage
const color = closestColor('#a00a0a')
console.log(simpleColor)
// -> 'darkred'

// with the `detailed` option
const colorWithAdditionalInformation = closestColor('#1019a6', { detailed: true })
console.log(detailedColor)
// -> {
//     name: 'darkblue',
//     hex: '#00008b',
//     rgb: {red: 0, green: 0, blue: 139}
// }
```

## Contributing

If you found a bug or want to propose a feature, feel free to visit [the issues page](https://github.com/juliuste/closest-css-color/issues).
