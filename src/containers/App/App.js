import React, { PropTypes } from 'react'
import messages from './App.messages'
import Helmet from 'react-helmet'
import { injectIntl, intlShape } from 'react-intl'
import { Footer, Header } from '../../components'
import { resolver } from 'react-redux-universal-resolver'
import { fetch } from '../../service/api'

const App = props => {
  const {
    children,
    intl: { formatMessage },
    categories
  } = props
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
      <Header categories={categories} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node,
  intl: intlShape,
  categories: PropTypes.arrayOf(PropTypes.object)
}

const empty = () => ({})

export default resolver({
  categories: () => fetch('categories').then(x => x.json())
}, empty, empty)(injectIntl(App))
