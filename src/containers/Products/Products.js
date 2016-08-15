import React, { PropTypes } from 'react'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import Helmet from 'react-helmet'
import { resolver } from 'react-redux-universal-resolver'
import { json } from '../../service/api'
import { ProductCategoriesList } from '../../components'

const Products = props => {
  const { productCategories, intl: { formatMessage } } = props
  const styles = require('./Products.css') // eslint-disable-line global-require
  const messages = require('./Products.messages').default // eslint-disable-line global-require

  return (
    <div>
      <Helmet title={formatMessage(messages.title)} />
      <h1><FormattedMessage {...messages.header} /></h1>
      <div className={styles.categories}>
        <ProductCategoriesList categories={productCategories} />
      </div>
    </div>
  )
}

Products.propTypes = {
  intl: intlShape,
  productCategories: PropTypes.arrayOf(PropTypes.object)
}

const empty = () => ({})

export default resolver({
  productCategories: () => json('ProductCategories')
}, empty, empty)(injectIntl(Products))
