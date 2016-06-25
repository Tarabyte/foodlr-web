/**
 * Custom webpack config for story book
 */
const styleLoaderConfig = require('./commons/dev-style-loader-config')

module.exports = {
  module: {
    loaders: [
      styleLoaderConfig
    ]
  }
}
