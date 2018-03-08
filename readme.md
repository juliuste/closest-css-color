# closest-css-color

Find the closest CSS color keyword for a given HEX color value.

[![npm version](https://img.shields.io/npm/v/closest-css-color.svg)](https://www.npmjs.com/package/closest-css-color)
[![Build Status](https://travis-ci.org/juliuste/closest-css-color.svg?branch=master)](https://travis-ci.org/juliuste/closest-css-color)
[![Greenkeeper badge](https://badges.greenkeeper.io/juliuste/closest-css-color.svg)](https://greenkeeper.io/)
[![dependency status](https://img.shields.io/david/juliuste/closest-css-color.svg)](https://david-dm.org/juliuste/closest-css-color)
[![dev dependency status](https://img.shields.io/david/dev/juliuste/closest-css-color.svg)](https://david-dm.org/juliuste/closest-css-color#info=devDependencies)
[![license](https://img.shields.io/github/license/juliuste/closest-css-color.svg?style=flat)](LICENSE)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)

## Installation

```bash
npm install --save closest-css-color
```

## `closestColor(hex, opt={})`
```js
const closestColor = require('closest-css-color')

const simpleColor = closestColor('#a00a0a')
console.log(simpleColor) // 'darkred'

const detailedColor = closestColor('#1019a6', {detailed: true})
console.log(detailedColor)

// {
//     name: 'darkblue',
//     hex: '#00008b',
//     rgb: {red: 0, green: 0, blue: 139}
// }
```

## Contributing

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/juliuste/closest-css-color/issues).
