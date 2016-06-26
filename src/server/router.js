/* eslint-disable no-console */
import React from 'react'
import { match, RouterContext } from 'react-router'
import createMemoryHistory from 'react-router/lib/createMemoryHistory'
import getRoutes from '../routes'
import render from './render'
import createStore from '../redux/create'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { resolveOnServer } from 'react-redux-universal-resolver'
import localize from '../intl'

/**
 * Server side rendering and routing middleware
 */
export default config => assetsProvider => (req, res) => {
  const location = req.originalUrl
  const memoryHistory = createMemoryHistory(location)
  const store = createStore(memoryHistory, {})
  const history = syncHistoryWithStore(memoryHistory, store)
  const routes = getRoutes()
  const locale = config.lang
  // eslint-disable-next-line global-require
  const messages = require(`../messages/locales/${locale}.json`)

  // refresh assets provider in dev mode
  if (__DEVELOPMENT__) {
    assetsProvider.refresh()
  }

  match({ history, routes, location }, (err, redirect, props) => {
    if (err) {
      console.error(`Routing error on ${location}`)
      res.status(500)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      resolveOnServer(props.components, store.getState(), props, store.dispatch)
        .then(() => {
          const component = localize(locale, messages, (
            <Provider store={store}>
              <RouterContext {...props} />
            </Provider>
          ))

          res
            .status(200)
            .send(render({ config, component, store, assets: assetsProvider.assets(), messages }))
        })
    } else {
      // should never get here
      console.error(`Totally freaking unexpected route ${location}`)
      res.status(404).send('Not found')
    }
  })
}
