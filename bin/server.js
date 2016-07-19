/**
 * Hookup babel
 */
require('../src/server/babel')

/**
 * Global variables setup
 */
// eslint-disable-next-line no-underscore-dangle
global.__DEVELOPMENT__ = process.env.NODE_ENV === 'development'
// eslint-disable-next-line no-underscore-dangle
global.__PRODUCTION__ = process.env.NODE_ENV === 'production'
// eslint-disable-next-line no-underscore-dangle
global.__SERVER__ = true
// eslint-disable-next-line no-underscore-dangle
global.__CLIENT__ = false

if (__DEVELOPMENT__) {
  // eslint-disable-next-line global-require
  const piping = require('piping')({
    hook: true
  })
  if (!piping) {
    return
  }
}

/**
 * Isomorphic Tools Config
 */
const WebpackIsomorphicTools = require('webpack-isomorphic-tools')
const isomorphicToolsConfig = require('../webpack-cfg/isomorphic-tools')


const launchServer = require('../src/server')
const rootDir = require('path').resolve(__dirname, '..')

const assetsProvider = new WebpackIsomorphicTools(isomorphicToolsConfig)
  .development(__DEVELOPMENT__)
  .server(rootDir, () => {
    launchServer(assetsProvider)
  })
