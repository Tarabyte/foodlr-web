/**
 * Hookup babel
 */
require('../src/server/babel')

const manageTranslations = require('react-intl-translations-manager').default

manageTranslations({
  messagesDirectory: 'src/messages/extracted',
  translationsDirectory: 'src/messages/locales/',
  languages: ['ru-RU']
})
