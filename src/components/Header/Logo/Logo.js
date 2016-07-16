import React from 'react'
import { Link, PropTypes } from 'react-router'

const Logo = ({ home }) => {
  const styles = require('./Logo.css') // eslint-disable-line global-require
  const img = (
    <svg className={styles.logo} viewBox="0 0 100 40">
      <text x="0" y="35" className={styles.logoText}>FoodZzilla</text>
    </svg>
  )
  if (home) {
    return (
      <Link to={home}>
        {img}
      </Link>
    )
  }

  return img
}


Logo.propTypes = {
  home: PropTypes.locationShape
}

export default Logo
