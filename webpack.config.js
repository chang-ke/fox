const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CheckerPlugin} = require('awesome-typescript-loader');

const config = (module.exports = {
  stats: 'errors-only',
  devtool: 'source-map',
  entry: {index: path.join(__dirname, './src/index.tsx')},
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].[hash].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[chunkhash].async.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader?cacheDirectory=true',
          'awesome-typescript-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'source-map-loader',
      },
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          /* Loader options go here */
        },
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'typings-for-css-modules-loader?module=false',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  devServer: {
    contentBase: path.join(__dirname, './public'),
    historyApiFallback: true,
    stats: 'errors-only',
    host: 'localhost',
    inline: true,
    open: true,
    port: 8080,
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
      template: path.join(__dirname, './public/index.html'),
    }),
  ],
});
