import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import categoryShape from './category.shape'

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
  categories: PropTypes.arrayOf(categoryShape).isRequired
}

export default Categories
