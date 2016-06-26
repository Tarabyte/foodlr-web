import React from 'react'
import { addLocaleData, IntlProvider } from 'react-intl'
import ru from 'react-intl/locale-data/ru'

addLocaleData(ru)

export default (locale, messages, component) => (
  <IntlProvider locale={locale} messages={messages} defaultLocale="ru-RU">
    {component}
  </IntlProvider>
)
