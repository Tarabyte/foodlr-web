/**
 * Babel hook
 */
const fs = require('fs')
const babel = require('babel-register')
// TODO: remove this dependency on webpack-cfg
const names = require('../../webpack-cfg/commons/es6-node-modules').names

const matchers = names
  .map(name => new RegExp(`node_modules\/${name}`))
  .map(regexp => name => regexp.test(name))

const ignore = filename => {
  if (!/node_modules/.test(filename)) { // our file - compile
    return false
  }

  // check if module was not precompiled
  return matchers.every(matcher => !matcher(filename))
}

try {
  const configFile = fs.readFileSync('./.babelrc')
  const additionalOptions = {
    ignore
  }

  const config = Object.assign(JSON.parse(configFile), additionalOptions)

  babel(config)
} catch (e) {
  // eslint-disable-next-line no-console
  console.error('Error on reading root .babelrc config')
  // eslint-disable-next-line no-console
  console.error(e)
}
