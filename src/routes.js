import React from 'react'
import { Route, IndexRoute } from 'react-router'
import {
  App,
  NotFound,
  Home,
  Post
} from './containers'

export default () => (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="posts/:id" component={Post} />

    {/* 404 capture */}
    <Route path="*" component={NotFound} />
  </Route>
)
