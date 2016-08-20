import React from 'react'
import { Link } from 'react-router'
import { FormattedMessage } from 'react-intl'

const Nav = () => {
  const styles = require('./Nav.css') // eslint-disable-line global-require

  // eslint-disable-next-line global-require
  const messages = require('./Nav.messages').default

  const links = [
    { to: '/', message: messages.home },
    { to: '/rubric/world', message: messages.worldCuisines },
    { to: '/recipes', message: messages.recipes },
    { to: '/products', message: messages.products },
    { to: '/rubric/school', message: messages.school },
    { to: '/rubric/travelers', message: messages.travelers }
  ]

  return (
    <nav className={styles.container}>
      <ul className={styles.links}>
        {
          links.map(({ to, message }) => (
            <li className={styles.linksItem} key={message.id}>
              <Link to={to} className={styles.linksItemLink}>
                <FormattedMessage {...message} />
              </Link>
            </li>
          ))
        }
      </ul>
      <span className={styles.random}>
        <Link to="/recipes/random" className={styles.randomText}>
          <FormattedMessage {...messages.random} />
        </Link>
      </span>
    </nav>
  )
}

export default Nav
