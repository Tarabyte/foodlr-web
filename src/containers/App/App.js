import React, { PropTypes } from 'react'
import messages from './App.messages'
import Helmet from 'react-helmet'
import { injectIntl, intlShape } from 'react-intl'


const App = props => {
  const { children, intl: { formatMessage } } = props
  const logo = require('./logo.png') // eslint-disable-line global-require
  const styles = require('./App.css')// eslint-disable-line global-require

  return (
    <div className={styles.appContainer}>
      <Helmet
        title={formatMessage(messages.title)}
        meta={[
          { name: 'description', content: formatMessage(messages.description) },
          { name: 'keywords', content: formatMessage(messages.keywords) }
        ]}
      />
      <header>
        <img src={logo} alt={formatMessage(messages.logo)} className={styles.appLogo} />
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node,
  intl: intlShape
}

export default injectIntl(App)
