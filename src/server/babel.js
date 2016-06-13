/**
 * Babel hook
 */
const fs = require('fs')
const babel = require('babel-register')

try {
  const configFile = fs.readFileSync('./.babelrc')

  const config = JSON.parse(configFile)

  babel(config)
} catch (e) {
  // eslint-disable-next-line no-console
  console.error('Error on reading root .babelrc config')
  // eslint-disable-next-line no-console
  console.error(e)
}
