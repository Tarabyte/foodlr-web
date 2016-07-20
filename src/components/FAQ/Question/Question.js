import React from 'react'
import faqShape from '../faq.shape'

const Question = ({ question }) => {
  const styles = require('./Question.css') // eslint-disable-line global-require

  return (
    <div className={styles.question}>
      <h3>{question.question}</h3>
      <div
        className={styles.answer}
        dangerouslySetInnerHTML={{ __html: question.answer }}
      />
    </div>
  )
}

Question.propTypes = {
  question: faqShape
}

export default Question
