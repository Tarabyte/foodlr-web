import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Nav from './Nav'

storiesOf('Header-Navigation', module)
  .add('Default', () => <Nav />)
