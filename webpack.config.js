'use strict';

let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  context: __dirname + '\u005Cfrontend',
  entry:  {
    main: './main',
    style: './style'
  },
  output:  {
    path:     __dirname + '/public',
    publicPath: '/',
    filename: '[name].js'
  },
  watch: true,
  resolve: {
    extensions: ['', '.js', '.styl']
  },

  module: {

    loaders: [{
      test:   /\.js$/,
      loader: "babel?presets[]=es2015"
    }, {
      test:   /\.pug$/,
      loader: "pug-loader"
    }, {
      test:   /\.styl$/,
      loader: ExtractTextPlugin.extract('css!stylus-loader?resolve url')
    }, {
      test:   /\.(png|jpg)$/,
      loader: 'file?name=[path][name].[ext]'
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file?name=fonts/[name].[ext]'
    }]

  },

  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './index.pug'
    }),
    new ExtractTextPlugin('[name].css', {allChunks: true, pretty: true})
  ]
};
