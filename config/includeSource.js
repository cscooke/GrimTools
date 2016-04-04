// https://github.com/jwvdiermen/grunt-include-source
module.exports = {
  options: {
    basePath: 'app',
    baseUrl: '/'
  },
  index: {
    files: {
      'app/index.html': 'templates/index.tpl.html'
    }
  }
};
