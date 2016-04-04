const path        = require('path');
const loadConfig  = require('load-grunt-config');
const loadTasks   = require('load-grunt-tasks');
const time        = require('time-grunt');

module.exports = function (grunt) {
  loadTasks(grunt);

  loadConfig(grunt, {
    configPath: path.join(process.cwd(), 'config'),
    init: true
  });

  time(grunt);

  grunt.registerTask('dev', [
    'sass',
    'includeSource',
    'wiredep',
    'connect',
    'watch'
  ]);
};
