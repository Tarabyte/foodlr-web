/**
 * 404 page component
 */
import React from 'react'

export default () => {
  // eslint-disable-next-line global-require
  const styles = require('./NotFound.css')
  return (
    <div>
      <div className={styles.title}>Адрес не найден! </div>
      <div className={styles.grid}>
        <div className={styles.gridItem}>1</div>
        <div className={styles.gridItem}>2</div>
        <div className={styles.gridItem}>3</div>
        <div className={styles.gridItem}>4</div>
        <div className={styles.gridItem}>5</div>
      </div>
    </div>
  )
}

