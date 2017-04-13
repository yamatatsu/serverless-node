const path = require('path')
const glob = require('glob')

module.exports = {
  entry: glob.sync('./handlers/*.js').reduce((acc, item) => {
    return Object.assign(acc, { [path.basename(item, '.ts')]: item })
  }, {}),

  target:  'node',
  devtool: 'source-map',

  module: {
    rules: [],
  },

  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
}
