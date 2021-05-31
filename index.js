'use strict'

const cssColors = require('css-color-names')
const sortBy = require('lodash/sortBy')
const pick = require('lodash/pick')
const uniqBy = require('lodash/uniqBy')
const proximity = require('colour-proximity').proximity

const uniqColorKeys = uniqBy(Object.keys(cssColors), c => cssColors[c])
const filteredColors = pick(cssColors, uniqColorKeys)

const colors = sortBy(
	Object.keys(filteredColors).map(name => ({
		name,
		hex: filteredColors[name],
	})),
	c => c.hex,
)

const defaults = {
	detailed: false,
}

const main = (hex, opt = {}) => {
	const options = { ...defaults, ...opt }
	const sortedColors = sortBy(colors, c => proximity(hex, c.hex))
	if (options.detailed) return sortedColors[0]
	return sortedColors[0].name
}

module.exports = main
