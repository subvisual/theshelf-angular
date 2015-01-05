'use strict';

module.exports = {

  'serverport': 3000,

  'styles': {
    'src' : 'app/styles/**/*.sass',
    'dest': 'build/css'
  },

  'scripts': {
    'src' : 'app/js/**/*.js',
    'dest': 'build/js'
  },

  'images': {
    'src' : 'app/images/**/*',
    'dest': 'build/images'
  },

  'views': {
    'watch': [
      'app/index.html',
      'app/js/**/*.html'
    ],
    'src': 'app/js/**/*.html',
    'dest': 'app/js/core'
  },

  'dist': {
    'root'  : 'build'
  },

  'browserify': {
    'main_entry': './app/js/main.js',
    'e2e_entry' : './app/js/main_e2e.js',
    'bundleName': 'main.js'
  },

  'test': {
    'karma': 'test/karma.conf.js',
    'protractor': 'test/protractor.conf.js'
  }

};
