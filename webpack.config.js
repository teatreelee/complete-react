const path = require('path')

module.exports = {
  context: __dirname, // allows you to know where you're running this from and run from anywhee
  entry: './js/ClientApp.jsx', // where we enter our webpack (mainfile)
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'] // order for webpack to look for file extensions
  },
  stats: {
    colors: true, // for command line
    reasons: true, // for error messages
    chunks: false
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: '  /node_modules/'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/, // makes sure that babel only looks for js or jsx files and not ext like css
        loader: 'babel-loader' // any with those file extensions should be run through this
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }

}
