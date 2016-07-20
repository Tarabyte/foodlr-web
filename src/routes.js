import React from 'react'
import { Route, IndexRoute } from 'react-router'
import {
  App,
  NotFound,
  Home,
  Terms
} from './containers'

export default () => (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="terms" component={Terms} />

    {/* 404 capture */}
    <Route path="*" component={NotFound} />
  </Route>
)
