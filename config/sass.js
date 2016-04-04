// https://github.com/gruntjs/grunt-contrib-sass
module.exports = {
  css: {
    options: {
      lineNumbers : true,
      update: true
    },
    files: [{
      expand  : true,
      cwd     : 'app',
      src     : [
        'app.scss',
        '/components/**/*.scss'
      ],
      dest    : 'app/assets/css',
      ext     : '.css'
    }]
  }
};
