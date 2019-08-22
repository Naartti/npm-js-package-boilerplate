const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const libraryName = require('./package.json').name
const outputFile = `${libraryName}.js`

module.exports = {
  entry: {
    app: './src/index.js'
  },
  devtool: 'source-map',
  output: {
    filename: outputFile,
    path: path.resolve(__dirname, 'lib'),
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    alias: require('./aliases.config.js').webpack
  },
  devServer: {
    contentBase: path.join(__dirname, 'lib'),
    open: 'Google Chrome',
    openPage: libraryName,
    hot: true
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true
      })
    ]
  },
  module: {
    rules: [{
        test: /\.js/,
        exclude: /(node_modules)/,
        use: [{
            loader: 'babel-loader'
        }]
    }]
  }
};