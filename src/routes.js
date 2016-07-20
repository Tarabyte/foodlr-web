import React from 'react'
import { Route, IndexRoute } from 'react-router'
import {
  App,
  NotFound,
  Home,
  Terms,
  FAQ
} from './containers'

export default () => (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="terms" component={Terms} />
    <Route path="faq" component={FAQ} />

    {/* 404 capture */}
    <Route path="*" component={NotFound} />
  </Route>
)
