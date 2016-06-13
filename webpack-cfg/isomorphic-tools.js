const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
const urlLoaderParser = WebpackIsomorphicToolsPlugin.url_loader_parser

module.exports = {
  debug: false,

  assets: {
    images: {
      extensions: [
        'jpeg',
        'jpg',
        'png',
        'gif'
      ],
      parser: urlLoaderParser
    },
    fonts: {
      extensions: [
        'woff',
        'woff2',
        'ttf',
        'eot'
      ],
      parser: urlLoaderParser
    },
    svg: {
      extension: 'svg',
      parser: urlLoaderParser
    }
  }
}
