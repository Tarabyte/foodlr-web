import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import config from './config'
import create from './redux/create'
import getRoutes from './routes'
import localize from './intl'

const initialState = window[config.state]
const store = create(browserHistory, initialState)
const history = syncHistoryWithStore(browserHistory, store)
const mountingPoint = document.getElementById(config.contentId)
const messages = window[config.messages]
const locale = document.documentElement.getAttribute('lang')

const component = localize(locale, messages, (
  <Provider store={store}>
    <Router history={history} >
      {getRoutes()}
    </Router>
  </Provider>)
)

render(component, mountingPoint)

// the rest is hot reload stuff
// for development purpose only
if (__DEVELOPMENT__) {
  if (module && module.hot) {
    module.hot.accept('./routes', () => {
      // eslint-disable-next-line global-require
      const nextRoutes = require('./routes').default

      const nextComponent = localize(locale, messages, (
        <Provider store={store}>
          <Router history={history}>
            {nextRoutes()}
          </Router>
        </Provider>
      ))
      // router doesn't allow to replace routes per se
      // we need to unmount it first
      unmountComponentAtNode(mountingPoint)

      render(nextComponent, mountingPoint)
    })
  }
}
