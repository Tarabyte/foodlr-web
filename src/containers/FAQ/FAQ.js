import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import { FAQList } from '../../components'
import { resolver } from 'react-redux-universal-resolver'
import { json } from '../../service/api'

const FAQ = props => {
  const { intl: { formatMessage }, questions } = props
  const styles = require('./FAQ.css') // eslint-disable-line global-require
  const messages = require('./FAQ.messages').default // eslint-disable-line global-require

  return (
    <div className={styles.container}>
      <Helmet title={formatMessage(messages.title)} />
      <h1><FormattedMessage {...messages.header} /></h1>
      <FAQList questions={questions} />
    </div>
  )
}

FAQ.propTypes = {
  intl: intlShape,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default resolver({
  questions: () => json('faqs').then(faqs => faqs.map(faq => ({
    id: faq.id,
    question: faq.caption,
    answer: faq.content
  })))
})(injectIntl(FAQ))
