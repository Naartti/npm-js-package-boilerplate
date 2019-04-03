const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const libraryName = 'log-scope'
let outputFile = `${libraryName}.js`

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
  devServer: {
    contentBase: './lib',
    // index: outputFile,
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
},
};