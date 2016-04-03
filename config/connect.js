const rewrite = require('connect-modrewrite');

module.exports = {
  options: {
    middleware: function (connect, options, middlewares) {
      var rules = [
        '!\\.html|\\.js|\\.svg|\\.css|\\.png|\\.ttf$ /index.html [L]'
      ];

      middlewares.unshift(rewrite(rules));

      return middlewares;
    }
  },
  server: {
    options: {
      hostname: 'localhost',
      port: 9000,
      base: 'app',
      livereload: true,
    }
  }
};
