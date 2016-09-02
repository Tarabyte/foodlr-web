import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Nav } from './Nav'

storiesOf('Header-Navigation', module)
  .add('Default', () => <Nav showMore={false} toggle={action('show more')} />)
  .add('Opened', () => <Nav showMore toggle={action('show more')} />)
  .add('Small Screen', () => (
    <div style={{ maxWidth: 768 }}>
      <Nav showMore={false} toggle={action('show more')} />
    </div>
  ))
