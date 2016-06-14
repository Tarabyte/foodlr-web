const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
const {
  urlLoaderParser,
  styleLoaderFilter,
  styleLoaderPathExtractor,
  cssModulesLoaderParser
} = WebpackIsomorphicToolsPlugin


module.exports = {
  debug: false,

  assets: {
    images: {
      extensions: [
        'jpeg',
        'jpg',
        'png',
        'gif'
      ]
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
    },

    // This was taken from original docs
    // https://www.npmjs.com/package/webpack-isomorphic-tools#style-loader-css-stylesheets-with-css-modules-feature
    // Actually this is not beginner friendly at all -_-
    style_modules: {
      extension: 'css',
      filter: (module, regex, options, log) => {
        if (options.development) {
          return styleLoaderFilter(module, regex, options, log)
        }

        return regex.test(module.name)
      },
      path: (module, options, log) => {
        if (options.development) {
          return styleLoaderPathExtractor(module, options, log)
        }

        return module.name
      },
      parser: (module, options, log) => {
        if (options.development) {
          return cssModulesLoaderParser(module, options, log)
        }

        return module.source
      }
    }
  }
}
