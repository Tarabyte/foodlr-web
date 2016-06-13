import React from 'react'
import { Route, IndexRoute } from 'react-router'
import {
  App,
  NotFound,
  Home
} from './containers'

export default () => (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    {/* 404 capture */}
    <Route path="*" component={NotFound} />
  </Route>
)
