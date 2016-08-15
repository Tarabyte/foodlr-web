/**
 * Hookup babel
 */
require('../src/server/babel')
require('../src/server/globals')

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

const rootDir = require('path').resolve(__dirname, '..')

const assetsProvider = new WebpackIsomorphicTools(isomorphicToolsConfig)
  .development(__DEVELOPMENT__)
  .server(rootDir, () => {
    // eslint-disable-next-line
    console.info('Isomorphic Tools are ready. Starting a server')
    require('../src/server')(assetsProvider) // eslint-disable-line global-require
  })
