import React from 'react'
import { Route, IndexRoute } from 'react-router'
import {
  App,
  NotFound,
  Home,
  Terms,
  FAQ,
  Products
} from './containers'

export default () => (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="products">
      <IndexRoute component={Products} />
    </Route>
    <Route path="terms" component={Terms} />
    <Route path="faq" component={FAQ} />

    {/* 404 capture */}
    <Route path="*" component={NotFound} />
  </Route>
)
