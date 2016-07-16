import React from 'react'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'

const Header = () => {
  const styles = require('./Header.css') // eslint-disable-line global-require

  return (
    <header className={styles.container}>
      <div className={styles.logo}><Logo home="/" /></div>
      <div className={styles.navigation}><Nav /></div>
    </header>
  )
}

export default Header
