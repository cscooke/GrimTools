// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
  options: {
    livereload: true
  },
  css: {
    files: ['app/**/*.css'],
    tasks: []
  },
  js: {
    files: ['app/**/*.js'],
    tasks: [
      //
    ]
  },
  templates: {
    files: [
      'templates/*.tpl.html',
      '!app/index.html'
    ],
    tasks: [
      //
    ]
  }
};
