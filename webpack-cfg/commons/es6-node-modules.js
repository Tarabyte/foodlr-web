/**
 * List of node-modules that requires babel-loader
 */
const path = require('path')

const names = [
  'react-icons'
]

module.exports = {
  /**
   * Expose names for server whatever reason
   */
  names,
  /**
   * Preconfigured loader with correct include filter
   * @type {Object}
   */
  loader: {
    test: /\.jsx?$/,
    include: names.map(folder => path.join(__dirname, '../../node_modules', folder)),
    loader: 'babel'
  }
}
