/**
 * Custom webpack config for story book
 */
const styleLoader = require('./commons/dev-style-loader-config')

module.exports = styleLoader({
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' }
    ]
  }
})
