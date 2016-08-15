/* eslint no-console:0 */
require('../src/server/babel')
require('../src/server/globals')

const { json } = require('../src/service/api')

json('status').then(
  res => console.info('API server is up and running', res),
  err => console.error('Failed to ping API server', err)
)
