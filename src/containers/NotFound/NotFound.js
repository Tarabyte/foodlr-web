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
    </div>
  )
}

