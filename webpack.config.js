const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Client Monitor',
      template: './src/test.html'
    })
  ],
  devServer: {
    proxy: {
      '/browser/*': {
        target: 'http://123333',
        changeOrigin: true,
      },
      '/graphql': {
        target: 'http://demo.skywalking.apache.org',
        changeOrigin: true,
      },
      '/static/*': {
        target: 'http://kekek.cc',
        changeOrigin: true,
      }
    },
    contentBase: './dist',
    hot: false,
  }
};
