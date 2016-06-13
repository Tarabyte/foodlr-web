/**
 * Server configuration
 */
const { HOST, PORT, API_HOST, API_PORT, API_PREFIX, API_POSTFIX } = process.env

module.exports = {
  host: HOST || 'localhost',
  port: parseInt(PORT, 10) || 8080,
  api: {
    host: API_HOST || 'localhost',
    port: parseInt(API_PORT, 10) || 3000,
    prefix: API_PREFIX || 'api',
    postfix: API_POSTFIX || 'api'
  },
  get publicPath() {
    return `http://${this.host}:${this.port}`
  }
}
