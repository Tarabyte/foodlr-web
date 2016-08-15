import { PropTypes } from 'react'

const { string, shape } = PropTypes

export default shape({
  id: string.isRequired,
  caption: string.isRequired,
  description: string
})
