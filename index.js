'use strict'

const cssColors = require('css-color-names')
const hex2rgb = require('hex-rgb')
const sortBy = require('lodash.sortby')
const merge = require('lodash.merge')
const pick = require('lodash.pick')
const uniqBy = require('lodash.uniqby')

const uniqColorKeys = uniqBy(Object.keys(cssColors), c => cssColors[c])
const filteredColors = pick(cssColors, uniqColorKeys)

const colors = sortBy(
    Object.keys(filteredColors).map(name => ({
        name,
        hex: filteredColors[name],
        rgb: pick(hex2rgb(filteredColors[name]), ['red', 'green', 'blue'])
    })),
    c => c.hex
)

const defaults = {
    detailed: false
}

// actually this is not distance but distance^2, doesn't matter here though
const distance = (rgb1, rgb2) =>
    Math.pow(rgb2.red-rgb1.red, 2)
+   Math.pow(rgb2.green-rgb1.green, 2)
+   Math.pow(rgb2.blue-rgb1.blue, 2)

const main = (hex, opt={}) => {
    const options = merge({}, defaults, opt)
    const rgb = hex2rgb(hex)
    const sortedColors = sortBy(colors, c => distance(rgb, c.rgb))
    if(options.detailed) return sortedColors[0]
    return sortedColors[0].name
}

module.exports = main
