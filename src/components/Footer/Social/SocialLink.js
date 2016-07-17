import React, { PropTypes } from 'react'
import fb from 'react-icons/fa/facebook'
import vk from 'react-icons/fa/vk'
import ok from 'react-icons/fa/odnoklassniki'

const { string } = PropTypes

const icons = {
  fb,
  vk,
  ok
}


const SocialLink = props => {
  const styles = require('./SocialLink.css') // eslint-disable-line global-require
  const { href, title, icon } = props

  const Icon = icons[icon] || null

  return (
    <a href={href} title={title} target="_blank" className={styles.link}>
      <Icon />
    </a>
  )
}

SocialLink.propTypes = {
  href: string.isRequired,
  title: string.isRequired,
  icon: string,
  className: string
}

export default SocialLink
