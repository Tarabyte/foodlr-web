import React from 'react'
import { injectIntl, intlShape } from 'react-intl'
import SocialLink from './SocialLink'

const Social = props => {
  const { intl: { formatMessage } } = props
  const {
    fb,
    vk,
    ok
  } = require('./Social.messages').default // eslint-disable-line global-require
  // eslint-disable-next-line global-require
  const styles = require('./Social.css')

  const links = [
    {
      href: 'https://facebook.com',
      message: fb,
      key: 'fb'
    },
    {
      href: 'https://vk.com',
      message: vk,
      key: 'vk'
    },
    {
      href: 'https://ok.ru',
      message: ok,
      key: 'ok'
    }
  ]

  return (
    <div className={styles.container}>
      {links.map(options => (
        <SocialLink
          key={options.key}
          href={options.href}
          title={formatMessage(options.message)}
          icon={options.key}
        />
      ))}
    </div>
  )
}

Social.propTypes = {
  intl: intlShape
}

export default injectIntl(Social)
