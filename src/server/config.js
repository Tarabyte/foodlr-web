/**
 * Server configuration
 */
const { HOST, PORT } = process.env

module.exports = {
  host: HOST || 'localhost',
  port: parseInt(PORT, 10) || 8080,
  get publicPath() {
    return `http://${this.host}:${this.port}`
  }
}
