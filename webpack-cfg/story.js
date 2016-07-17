/**
 * Custom webpack config for story book
 */
const styleLoader = require('./commons/dev-style-loader-config')
const es6NodeModulesLoader = require('./commons/es6-node-modules').loader

console.log(es6NodeModulesLoader)

module.exports = styleLoader({
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      es6NodeModulesLoader
    ]
  }
})
