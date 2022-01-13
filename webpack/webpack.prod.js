const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  entry: ['@babel/polyfill', './src/index.js'],
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: './favicon.ico' },
      ]
    })
  ]
});
