const path = require('path');
const HtmlPlugin = require('html-webpack-plugin'); //Đóng gói file html
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin'); // Phân biệt file viết hoa
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //Đóng gói file css
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const {BundleAnalyzerPlugin} =require('webpack-bundle-analyzer'); //Sau khi bundle sẽ hiển thị thống kê file (mb)
const CompressionPlugin = require('compression-webpack-plugin');
const TesterPlugin = require('terser-webpack-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[fullhash].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [
      new TesterPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[hash:20].[ext]',
              limit: 8192,
            },
          },
        ],
      },
      {
        // Load all icons
        // eslint-disable-next-line no-useless-escape
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, './src/@core'),
      '@page': path.resolve(__dirname, './src/page'),
      extensions: ['.mjs', '.js', '.json'],
    },
  },
  plugins: [
    new HtmlPlugin({
      template: 'index.html',
    }),
    new CaseSensitivePathsPlugin(),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new CompressionPlugin(),
  ],
};
