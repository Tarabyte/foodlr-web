import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Logo from './Logo'

storiesOf('Header-Logo', module)
  .add('W/o home', () => <Logo />)
  .add('W home link', () => <Logo home="/" />)
