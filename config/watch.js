// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
  options: {
    livereload: true
  },
  sass: {
    files: ['app/**/*.scss'],
    tasks: ['sass:css'],
    options: {
      livereload: false
    }
  },
  css: {
    files: ['app/assets/css/*.css']
  },
  js: {
    files: ['app/**/*.js'],
    tasks: [
      //
    ]
  },
  partials: {
    files: [
      'app/**/*.partial.html',
      'templates/*.tpl.html',
      '!app/index.html'
    ],
    tasks: [
     'includeSource',
      'wiredep'
    ]
  }
};
