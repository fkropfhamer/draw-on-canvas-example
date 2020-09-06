const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    entry: './index.js',
    module: {
      rules: [
        {
          test: /\.js/,
          use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
          },
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [ '.js' ],
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'public'),
    },
    plugins: [new HtmlWebpackPlugin({template: './index.html'})]
  }
]
