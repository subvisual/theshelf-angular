'use strict';

var istanbul = require('browserify-istanbul');
var to5ify   = require('6to5ify');

module.exports = function(config) {

  var configuration = {

    basePath: '../',

    frameworks: ['mocha', 'sinon-chai', 'browserify'],

    files: [
      'app/js/main.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-data-mocks/dist/angular-data-mocks.js',
      'test/unit/**/*.js',
      'app/js/**/*.html'
    ],

    preprocessors: {
      'app/js/main.js': ['browserify'],
      'app/js/**/*.html': 'ng-html2js'
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'karma.templates',
      stripPrefix: 'app/js/'
    },

    coverageReporter: {
      'reporters': [
        {'type': 'text-summary'}
        // {'type': 'html'}
      ]
    },

    reporters: ['progress', 'coverage'],

    browsers: ['Chrome'],

    autoWatch: true,

    proxies: {
      '/': 'http://localhost:9876/'
    },

    urlRoot: '/__karma__/',

    // logLevel: LOG_DEBUG,

    browserify: {
      debug: true,
      transform: [
        to5ify.configure({ ignore: /bower_components/ }),
        istanbul({ ignore: ['**/bower_components/**'] })
      ]
    }

  };

  config.set(configuration);

};
