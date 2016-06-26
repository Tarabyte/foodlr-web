import React from 'react'
import { Link } from 'react-router'
import { FormattedMessage } from 'react-intl'
import messages from './Home.messages'

export default props => (
  <div className="home">
    <h1> <FormattedMessage {...messages.title} /> </h1>
    <Link to="/fag"> <FormattedMessage {...messages.nowhere} /></Link>
    <Link to="/test/10" activeClassName="tezd"> Test 10 </Link>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </div>
)
