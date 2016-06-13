const base = require('./base')
const webpack = require('webpack')
const path = require('path')
const srcPath = path.resolve(__dirname, '..', process.env.NODE_PATH)
const assetsPath = path.resolve(__dirname, '../public/dist')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
const isomorphicToolsConfig = require('./isomorphic-tools')

const isomorphicPlugin = new WebpackIsomorphicToolsPlugin(isomorphicToolsConfig)

module.exports = url => Object.assign({}, base, {
  debug: true,
  devtool: 'inline-source-map',
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
        test: isomorphicPlugin.regular_expression('images'),
        loader: 'url-loader?limit=10240'
      }
      /*{
        test: /\.css$/,
        loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version'
      }*/
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __PRODUCTION__: false
    }),
    isomorphicPlugin.development()
  ]
})
