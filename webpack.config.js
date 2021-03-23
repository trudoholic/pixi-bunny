const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }/*,
  module: {
    rules: [
      {
        test: /\.json$/,
        // loader: 'json'
        use: 'transform?brfs'
      }
    ]
	// ,
    // postLoaders: [
      // {
        // include: path.resolve(__dirname, 'node_modules/pixi.js'),
        // loader: 'transform?brfs'
      // }
    // ]
  }*/
};

module.exports = config;