'use strict';

var istanbul = require('browserify-istanbul');

module.exports = function(config) {

  var configuration = {

    basePath: '../',

    frameworks: ['mocha', 'sinon-chai', 'browserify'],

    files: [
      'node_modules/traceur/bin/traceur-runtime.js',
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

    browsers: ['Firefox', 'Chrome'],

    autoWatch: true,

    proxies: {
      '/': 'http://localhost:9876/'
    },

    urlRoot: '/__karma__/',

    browserify: {
      debug: true,
      transform: ['es6ify', istanbul({ ignore: ['**/bower_components/**'] })]
    }

  };

  config.set(configuration);

};
