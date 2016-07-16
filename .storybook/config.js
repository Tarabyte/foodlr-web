import 'babel-polyfill'
import React from 'react'
import { configure, addDecorator } from '@kadira/storybook'
import { IntlProvider, addLocaleData } from 'react-intl'
import ru from 'react-intl/locale-data/ru'

addLocaleData(ru)

addDecorator(story => {
  // eslint-disable-next-line global-require
  let messages = require('../src/messages/locales/ru-RU.json')

  if (module && module.hot) {
    module.hot.accept('../src/messages/locales/ru-RU.json', () => {
      // eslint-disable-next-line global-require
      messages = require('../src/messages/locales/ru-RU.json');
    })
  }

  return (
    <IntlProvider locale="ru-RU" messages={messages} defaultLocale="ru-RU">
      {story()}
    </IntlProvider>
  )
})

const loadStories = () => {
  const load = require.context('../src', true, /-story\.js$/)


  load.keys().forEach(key => {
    load(key)
  })
}

configure(loadStories, module)
