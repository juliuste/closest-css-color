'use strict'

const tape = require('tape')
const isObject = require('lodash/isObject')
const pick = require('lodash/pick')
const uniqBy = require('lodash/uniqBy')
const cssColors = require('css-color-names')

const closest = require('./index')

const uniqColorKeys = uniqBy(Object.keys(cssColors), c => cssColors[c])
const filteredColors = pick(cssColors, uniqColorKeys)

tape('closest-css-color', (t) => {
	const color1 = closest('#fff')
	t.ok(color1 === 'white', '#fff')

	const color2 = closest('#a00a0a', { detailed: false })
	t.ok(color2 === 'darkred', '#a00a0a')

	const color3 = closest('#1019a6', { detailed: true })
	t.ok(isObject(color3), '#1019a6')
	t.ok(color3.name === 'darkblue', '#1019a6')
	t.ok(color3.hex === '#00008b', '#1019a6')

	for (const color of Object.keys(filteredColors)) {
		t.ok(closest(filteredColors[color]) === color, color)
	}

	t.end()
})
