import { PropTypes } from 'react'

const { shape, string } = PropTypes

export default shape({
  id: string.isRequired,
  caption: string.isRequired,
  description: string
})
