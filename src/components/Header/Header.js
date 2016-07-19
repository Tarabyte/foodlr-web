import React, { PropTypes } from 'react'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'
import Categories, { categoryShape } from './Categories'

const Header = ({ categories }) => {
  const styles = require('./Header.css') // eslint-disable-line global-require

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Logo home="/" />
      </div>
      <div className={styles.navigation}>
        <Nav />
      </div>
      <div className={styles.categories}>
        <Categories categories={categories} />
      </div>
    </header>
  )
}

Header.propTypes = {
  categories: PropTypes.arrayOf(categoryShape).isRequired
}

export default Header
