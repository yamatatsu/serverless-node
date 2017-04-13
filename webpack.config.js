const path = require('path')
const glob = require('glob')

module.exports = {
  // entry: glob.sync('./handlers/*.ts').reduce((acc, item) => {
  //   const obj = {}
  //   obj[path.basename(item, '.ts')] = item
  //   return Object.assign(acc, obj)
  // }, {}),
  entry: './handler.js',

  target:  'node',
  devtool: 'source-map',

  module: {
    rules: [],
  },

  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'dist'),
    filename: 'handler.js',
  },
}
