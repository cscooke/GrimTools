// https://github.com/gruntjs/grunt-contrib-copy
module.exports = {
  index: {
    files: [{
      dest: 'app/index.html',
      src: [
        'templates/index.tpl.html'
      ]
    }]
  }
};
