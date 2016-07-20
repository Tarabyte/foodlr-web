import React from 'react'
import Helmet from 'react-helmet'
import { FormattedMessage, FormattedHTMLMessage, injectIntl, intlShape } from 'react-intl'

const Terms = props => {
  const { intl: { formatMessage } } = props
  const styles = require('./Terms.css') // eslint-disable-line global-require
  const messages = require('./Terms.messages').default // eslint-disable-line global-require

  return (
    <div className={styles.container}>
      <Helmet title={formatMessage(messages.title)} />
      <h1 className={styles.header}>
        <FormattedMessage {...messages.header} />
      </h1>
      <div className={styles.terms}>
        <FormattedHTMLMessage {...messages.terms} />
      </div>
    </div>
  )
}

Terms.propTypes = {
  intl: intlShape
}

export default injectIntl(Terms)
