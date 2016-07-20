import { PropTypes } from 'react'
import faqGroupShape from './faq.group.shape'

const { shape, string } = PropTypes

export default shape({
  id: string.isRequired,
  question: string.isRequired,
  answer: string.isRequired,
  group: faqGroupShape
})
