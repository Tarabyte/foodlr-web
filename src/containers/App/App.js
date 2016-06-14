import React, { PropTypes } from 'react'
import { connect } from 'react-redux'


const App = props => {
  const { children } = props
  const logo = require('./logo.png') // eslint-disable-line global-require
  const styles = require('./App.css')// eslint-disable-line global-require

  return (
    <div className={styles.appContainer}>
      <header>
        <img src={logo} alt="FoodZzilla logo" />
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node
}

export default connect()(App)
