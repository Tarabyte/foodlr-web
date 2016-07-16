import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router'


const Nav = () => {
  // eslint-disable-next-line global-require
  const styles = require('./Nav.css')
  // eslint-disable-next-line global-require
  const messages = require('./Nav.messages').default

  const links = [
    { to: '/', message: messages.home },
    { to: '/recipes', message: messages.recipes },
    { to: '/products', message: messages.products },
    { to: '/cousines', message: messages.cousines },
    { to: '/articles', message: messages.articles },
    { to: '/faq', message: messages.faq },
    { to: '/terms', message: messages.terms }
  ]

  return (
    <nav className={styles.container}>
      <ul className={styles.navigation}>
        {links.map(({ to, message }) => (
          <li className={styles.navigationItem} key={message.id}>
            <Link to={to}>
              <FormattedMessage {...message} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
