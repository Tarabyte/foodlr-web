import React from 'react'
import { Link } from 'react-router'

export default props => (
  <div className="home">
    <h1> Домашняя страница </h1>
    <Link to="/fag"> В никуда </Link>
    <Link to="/test/10" activeClassName="tezd"> Test 10 </Link>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </div>
)
