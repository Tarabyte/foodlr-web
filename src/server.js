/* eslint no-console:0 */
import Express from 'express'
import { createServer } from 'http'
import path from 'path'
import favicon from 'serve-favicon'
import compression from 'compression'
import config from './server/config'
import appConfig from './config'
import makeApiProxy from './server/api'
import router from './server/router'


/**
 * Takes universal assets provider and starts server
 */
module.exports = function run(assetsProvider) {
  const app = new Express()
  const server = createServer(app)

  // gzip
  app.use(compression())

  // serve favicon
  app.use(favicon(path.join(__dirname, '..', 'public', appConfig.favicon)))

  // serve static files
  app.use(Express.static(path.join(__dirname, '..', 'public')))

  // proxy api requests
  app.use(`/${config.api.prefix}`, makeApiProxy(config.api))

  // server side routing
  app.use(router(appConfig)(assetsProvider))


  // start http server
  server.listen(config.port, err => {
    if (err) {
      console.error(err)
    } else {
      console.log(`Application is up and running on ${config.host}:${config.port}`);
    }
  })
}
