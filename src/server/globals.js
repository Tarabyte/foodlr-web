/**
 * Global variables setup
 */
// eslint-disable-next-line no-underscore-dangle
global.__DEVELOPMENT__ = process.env.NODE_ENV === 'development'
// eslint-disable-next-line no-underscore-dangle
global.__PRODUCTION__ = process.env.NODE_ENV === 'production'
// eslint-disable-next-line no-underscore-dangle
global.__SERVER__ = true
// eslint-disable-next-line no-underscore-dangle
global.__CLIENT__ = false
