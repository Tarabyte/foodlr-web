import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

export const App = props => {
  const { children } = props

  return (
    <div className="app-container">
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
