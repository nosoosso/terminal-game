const path = require('path');

module.exports = {
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'index.bundle.js',
    publicPath: '/dist/'
  },
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
};