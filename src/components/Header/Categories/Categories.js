import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Categories = ({ categories }) => {
  const styles = require('./Categories.css') // eslint-disable-line global-require

  return (
    <nav className={styles.container}>
      <ul className={styles.categories}>
        {
          categories.map(category => (
            <li className={styles.category} key={category.id} title={category.description}>
              <Link to={`/category/${category.id}`}>{category.caption}</Link>
            </li>
          ))
        }

      </ul>
    </nav>
  )
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      caption: PropTypes.string,
      description: PropTypes.string
    })
  ).isRequired
}

export default Categories
