import React from 'react'
import messages from './Footer.messages'
import { FormattedMessage } from 'react-intl'
import Nav from './Nav/Nav'
import Social from './Social/Social'

export default () => {
  const styles = require('./Footer.css') // eslint-disable-line global-require
  return (
    <footer>
      <div className={styles.links}>
        <div className={styles.linksNav}>
          <Nav />
        </div>
        <div className={styles.linksSocial}>
          <Social />
        </div>
      </div>
      <div className={styles.copyright}>
        <FormattedMessage {...messages.copyright} />
      </div>
    </footer>
  )
}
