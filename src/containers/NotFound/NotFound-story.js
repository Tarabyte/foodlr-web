import React from 'react'
import { storiesOf } from '@kadira/storybook'
import NotFound from './NotFound'

storiesOf('NotFound', NotFound)
  .add('Default', () => (
    <NotFound />
  ))
