const path = require('path');
const webpack = require('webpack')
const src = path.join(__dirname, '..', 'src');
const es6NodeModulesLoader = require('./commons/es6-node-modules').loader
/**
 * Webpack test config
 */
module.exports = {
  devtool: 'eval',
  debug: true,
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'isparta-instrumenter',
        include: [
          src
        ],
        exclude: /-spec\.js$/
      }
    ],
    loaders: [
      // assuming we don't need all of this for unit tests
      {
        test: /\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl)$/,
        loader: 'null-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          src
        ]
      },
      es6NodeModulesLoader
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __PRODUCTION__: false,
      __SERVER__: false,
      __CLIENT__: true
    })
  ]
}
