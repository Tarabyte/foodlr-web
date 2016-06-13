import { createProxyServer } from 'http-proxy'

/**
 * Creates proxy middleware based on configuration options
 * @param  {String} options.host    API remote host
 * @param  {Number} options.port    API server port
 * @param  {String} options.postfix API server prefix
 * @return {Function<Req, Res, void>} Middleware function
 */
export default ({ host, port, postfix }) => {
  const targetUrl = `http://${host}:${port}/${postfix}`
  const proxy = createProxyServer({ targetUrl })

  // process proxy server errors
  proxy.on('error', (err, req, res) => {
    // eslint-disable-next-line no-console
    console.error(`Proxy error: ${req.method} ${req.url}`, err)

    if (!res.headersSent) {
      res.writeHead(500, {
        'content-type': 'application/json'
      });
    }

    res
      // We do not use json since it will sent headers w/o headersSent check
      .end(JSON.stringify({
        error: 'proxy_error',
        reason: err.message
      }))
  })

  return (req, res) => proxy.web(req, res, {
    target: targetUrl
  })
}
