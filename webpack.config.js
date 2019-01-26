const webpack = require('webpack');
const path = require('path');
const { AngularCompilerPlugin } = require('@ngtools/webpack');

const config = {
  target: "web",
  entry: {
    index: ['main.ts']
  },
  output: {
    path: path.resolve(__dirname, './assets'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/assets/',
    contentBase: path.resolve(__dirname, './'),
    watchContentBase: true,
    compress: true,
    port: 8080,
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new AngularCompilerPlugin({
        tsConfigPath: './tsconfig.json',
        entryModule: './main'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
          test: /\.ts$/,
          loader: '@ngtools/webpack'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}

module.exports = config;
