const path = require('path');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, './src/index')
  },
  output: {
    filename: 'bundle.js',
    library: 'true',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  module: {
    rules: [{
      test: /\.ts(x?)$/, // include .js files
      enforce: "pre", // preload the jshint loader
      exclude: /node_modules/, // exclude any and all files in the node_modules folder
      loader: 'babel-loader!ts-loader'
    }]
  },

  resolve: {
    extensions: ['.js'],
    modules: ['src', 'node_modules']
  }
};