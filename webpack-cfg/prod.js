const base = require('./base')
const webpack = require('webpack')
const path = require('path')

throw new Error('Not implemented yet')

module.exports = Object.assign({}, base, {
  debug: false,
  devtool: 'source-map',
  context: path.resolve(__dirname, '..'),
  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false,
      __PRODUCTION__: true,
      __SERVER__: false,
      __CLIENT__: true
    })
  ]
})
