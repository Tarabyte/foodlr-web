/**
 * API configuration
 */
const { API_HOST, API_PORT, API_PREFIX, API_POSTFIX } = process.env

module.exports = {
  host: API_HOST || 'localhost',
  port: parseInt(API_PORT, 10) || 3000,
  prefix: API_PREFIX || 'api',
  postfix: API_POSTFIX || 'api',
  get absoluteAPIPath() {
    return `http://${this.host}:${this.port}/${this.postfix}`
  },
  get localAPIPath() {
    return `/${this.postfix}`
  }
}
