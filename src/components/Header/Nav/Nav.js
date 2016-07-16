import React from 'react'
import { Link } from 'react-router'
import { FormattedMessage } from 'react-intl'

const Nav = () => {
  const styles = require('./Nav.css') // eslint-disable-line global-require

  // eslint-disable-next-line global-require
  const messages = require('./Nav.messages').default

  const links = [
    { to: '/recipes', message: messages.recipes },
    { to: '/products', message: messages.products },
    { to: '/cousines', message: messages.cousines },
    { to: '/articles', message: messages.articles }
  ]

  return (
    <nav className={styles.container}>
      <ul className={styles.links}>
        {
          links.map(({ to, message }) => (
            <li className={styles.linksItem} key={message.id}>
              <Link to={to}>
                <FormattedMessage {...message} />
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav
