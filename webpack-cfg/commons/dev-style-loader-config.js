/* eslint no-console:0*/
const normalize = require('postcss-normalize')
const cssnext = require('postcss-cssnext')
const stylelint = require('stylelint')
const reporter = require('postcss-reporter')
const lost = require('lost')
const font = require('postcss-font-magician')
const importer = require('postcss-import')

module.exports = config => {
  config.module.loaders.push({
    test: /\.css$/,
    /**
     * * camelCase to conver app-container into appContainer when used in js
     * * localIdentName will be something like app-container___hashpart
     * * importLoaders specify which loader should be used to handle @import statements
     *   PostCss for now. Check docs for more details https://github.com/webpack/css-loader#importing-and-chained-loaders
     *
     * @todo Ditch css loader, use postcss-modules instead
     */
    loader: 'style!css?modules&importLoaders=1&sourceMap&localIdentName=[local]___[hash:base64:5]&camelCase!postcss' // eslint-disable-line  
  })

  // eslint-disable-next-line no-param-reassign
  config.postcss = webpack => [
    importer({
      addDependencyTo: webpack
    }),
    stylelint,
    cssnext,
    lost,
    normalize,
    font,
    reporter
  ]

  return config
}
