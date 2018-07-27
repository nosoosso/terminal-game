const path = require('path');

module.exports = {
  content: path.resolve(process.cwd(), 'public'),
  open: true,
  dev:{
    publicPath: '/dist/'
  },
  add: (app, middleware, options) => {
    middleware.content();
    middleware.webpack();
  }
};
