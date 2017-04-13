const path = require('path')
const glob = require('glob')

module.exports = {
  entry: glob.sync('./handlers/*.js').reduce((acc, item) => {
    return Object.assign(acc, { [path.basename(item, '.js')]: item })
  }, {}),

  target:  'node',
  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ],
  },

  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
}
