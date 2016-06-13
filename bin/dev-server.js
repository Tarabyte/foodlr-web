/* eslint-disable no-console*/
const Express = require('express')
const webpack = require('webpack')

const serverConfig = require('../src/server/config')

const host = serverConfig.host
const port = serverConfig.port + 1
const url = `http://${host}:${port}`
const webpackConfig = require('../webpack-cfg/dev')(url)
const compiler = webpack(webpackConfig)

const serverOptions = {
  contentBase: url,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  stats: {
    colors: true
  }
}

const app = new Express()

app.use(require('webpack-dev-middleware')(compiler, serverOptions))
app.use(require('webpack-hot-middleware')(compiler))

app.listen(port, err => {
  if (err) {
    console.error(err)
  } else {
    console.info('Webpack development server listening on port %s', port)
  }
})
