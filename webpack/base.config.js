const path = require('path');
const webpack = require('webpack');
const htmlWebpack = require('html-webpack-plugin');

const baseConfig = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'app-bundle.js'
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      }
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new htmlWebpack({
      template: path.join(path.resolve(__dirname, '../src'), 'index.html')
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../src')
  }
};

module.exports = baseConfig;
