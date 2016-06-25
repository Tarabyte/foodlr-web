/**
 * Open dev page
 */
const open = require('open')
const { publicPath } = require('../src/server/config')
const browser = process.env.browser

// eslint-disable-next-line no-console
console.info(`Opening application at ${publicPath} using ${browser || 'default'} browser.`)

open(publicPath, browser)
