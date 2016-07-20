import React from 'react'
import { FormattedMessage } from 'react-intl'

export default () => {
  const styles = require('./Home.css') // eslint-disable-line global-require
  const messages = require('./Home.messages').default // eslint-disable-line global-require

  return (
    <div className={styles.container}>
      <h1><FormattedMessage {...messages.title} /></h1>
    </div>
  )
}
