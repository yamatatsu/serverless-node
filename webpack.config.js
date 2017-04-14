const path = require('path')
const glob = require('glob')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: glob.sync('./handlers/*.js').reduce((acc, item) => {
    return Object.assign(acc, { [path.basename(item, '.js')]: item })
  }, {}),

  target: 'node',
  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader', 'eslint-loader'],
        include: __dirname,
        exclude: /node_modules/,
      },
    ],
  },

  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },

  externals: [nodeExternals()],
}
