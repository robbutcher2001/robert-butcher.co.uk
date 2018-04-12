const path = require('path');
const webpack = require('webpack');
const htmlWebpack = require('html-webpack-plugin');

const baseConfig = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'app-bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new htmlWebpack({
      template: path.join(path.resolve(__dirname, '../src'), 'index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../src')
  }
};

module.exports = baseConfig;
