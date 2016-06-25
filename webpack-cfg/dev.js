const base = require('./base')
const webpack = require('webpack')
const path = require('path')
const srcPath = path.resolve(__dirname, '..', process.env.NODE_PATH)
const assetsPath = path.resolve(__dirname, '../public/dist')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
const isomorphicToolsConfig = require('./isomorphic-tools')

const isomorphicPlugin = new WebpackIsomorphicToolsPlugin(isomorphicToolsConfig)

const styleLoaderConfig = require('./commons/dev-style-loader-config')

module.exports = url => Object.assign({}, base, styleLoaderConfig({
  debug: false,
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    vendor: [
      `webpack-hot-middleware/client?path=${url}/__webpack_hmr`,
      './src/client/vendor.js'
    ],
    main: [
      `webpack-hot-middleware/client?path=${url}/__webpack_hmr`,
      './src/client.js'
    ]
  },
  output: {
    path: assetsPath,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: `${url}/dist/`
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader',
        query: {
          // for reason unknown eslint does not handle parser field from within eslintrc
          parser: 'babel-eslint'
        }
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'babel'
      },
      {
        test: isomorphicPlugin.regularExpression('images'),
        loader: 'url-loader?limit=10240'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // ignore errors for now
    // new webpack.NoErrorsPlugin(),
    /**
     * Extract vendors code in separate file
     * It wont change frequently, speeds reloading up even in dev mode.
     */
    new CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),

    // define constants
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __PRODUCTION__: false
    }),

    // isomorphic tools magic (stats collection etc)
    isomorphicPlugin.development()
  ]
}))
