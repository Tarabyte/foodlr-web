import React, { PropTypes } from 'react'
const { string, oneOf } = PropTypes

const icons = {
  fb: (
    <path
      d="M30.113,0.001c0,0-6.156,0-10.239,0c-6.082,0-12.843,2.549-12.843,11.351c0.032,3.065,0,6.001,0,9.306H0 v11.173h7.251V64h13.321V31.616h8.794l0.796-10.991h-9.821c0,0,0.026-4.893,0-6.31c0-3.476,3.628-3.279,3.84-3.279 c1.73,0,5.081,0.005,5.942,0V0L30.113,0.001L30.113,0.001z"
    />),
  vk: (
    <path
      d="M30.113,0.001c0,0-6.156,0-10.239,0c-6.082,0-12.843,2.549-12.843,11.351c0.032,3.065,0,6.001,0,9.306H0 v11.173h7.251V64h13.321V31.616h8.794l0.796-10.991h-9.821c0,0,0.026-4.893,0-6.31c0-3.476,3.628-3.279,3.84-3.279 c1.73,0,5.081,0.005,5.942,0V0L30.113,0.001L30.113,0.001z"
    />),
  ok: (
    <path
      d="M30.113,0.001c0,0-6.156,0-10.239,0c-6.082,0-12.843,2.549-12.843,11.351c0.032,3.065,0,6.001,0,9.306H0 v11.173h7.251V64h13.321V31.616h8.794l0.796-10.991h-9.821c0,0,0.026-4.893,0-6.31c0-3.476,3.628-3.279,3.84-3.279 c1.73,0,5.081,0.005,5.942,0V0L30.113,0.001L30.113,0.001z"
    />)
}

let styles = null

const Icon = ({ icon, title }) => (
  <svg aria-labelledby="title" className={styles.icon} viewBox="0 0 30.162 64">
    <title>{title}</title>
    {icons[icon]}
  </svg>
)

Icon.propTypes = {
  icon: oneOf(Object.keys(icons)).isRequired,
  title: string.isRequired
}

const SocialLink = props => {
  styles = require('./SocialLink.css') // eslint-disable-line global-require
  const { href, title, icon } = props

  return (
    <a href={href} title={title} target="_blank" className={styles.link}>
      <Icon icon={icon} title={title} />
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
