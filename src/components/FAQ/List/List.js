import React, { PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'
import Question from '../Question/Question'
import faqShape from '../faq.shape'


const List = ({ questions }) => {
  const styles = require('./List.css') // eslint-disable-line global-require
  const messages = require('./List.messages').default // eslint-disable-line global-require

  const renderQuestions = questions.length
    ? () => questions.map(question => (<Question key={question.id} question={question} />))
    : () => <FormattedMessage {...messages.empty} />


  return (
    <div className={styles.container}>
      {renderQuestions()}
    </div>
  )
}

List.propTypes = {
  questions: PropTypes.arrayOf(faqShape)
}


export default List
