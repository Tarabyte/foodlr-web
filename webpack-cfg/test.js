const path = require('path');
const src = path.join(__dirname, '..', 'src');
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
      }
    ]
  },
  plugins: []
}
