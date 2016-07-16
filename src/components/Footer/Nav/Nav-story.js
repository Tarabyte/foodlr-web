import React from 'react'
import Nav from './Nav'
import { storiesOf } from '@kadira/storybook'

storiesOf('Footer-Navigation', module)
  .add('Default', () => <Nav />)
