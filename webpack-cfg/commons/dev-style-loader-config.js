const autoprefixer = require('autoprefixer')

module.exports = {
  test: /\.css$/,
  /**
   * * camelCase to conver app-container into appContainer when used in js
   * * localIdentName will be something like app-container___hashpart
   * * importLoaders specify which loader should be used to handle @import statements
   *   PostCss for now. Check docs for more details https://github.com/webpack/css-loader#importing-and-chained-loaders
   *
   * @todo Ditch css loader, use postcss-modules instead
   */
  loader: 'style!css?modules&importLoaders=1&sourceMap&localIdentName=[local]___[hash:base64:5]&camelCase!postcss', // eslint-disable-line
  postcss: () => ([
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ])
}
