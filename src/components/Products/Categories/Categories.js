import React, { PropTypes } from 'react'
import categoryShape from '../category.shape'

const Categories = ({ categories }) => {
  const styles = require('./Categories.css') // eslint-disable-line global-require

  return (
    <div className={styles.container}>
      {
        categories.map(category => (
          <div className={styles.category} key={category.id}>
            {category.caption}
          </div>
        ))
      }
    </div>
  )
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(categoryShape)
}

export default Categories
