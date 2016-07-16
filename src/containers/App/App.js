import React, { PropTypes } from 'react'
import messages from './App.messages'
import Helmet from 'react-helmet'
import { injectIntl, intlShape } from 'react-intl'
import { Footer, Header } from '../../components'


const App = props => {
  const { children, intl: { formatMessage } } = props
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
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node,
  intl: intlShape
}

export default injectIntl(App)
