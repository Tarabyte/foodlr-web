import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Nav from './Nav'

storiesOf('Header-Navigation', module)
  .add('Default', () => <Nav />)
  .add('Small Screen', () => (
    <div style={{ maxWidth: 768 }}>
      <Nav />
    </div>
  ))
