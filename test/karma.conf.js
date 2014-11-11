'use strict';

module.exports = function(config) {

  var configuration = {

    basePath: '../',
    frameworks: ['jasmine', 'browserify'],
    preprocessors: {
      'app/js/**/*.js': ['browserify']
    },
    browsers: ['Firefox', 'Chrome', 'PhantomJS'],
    reporters: ['progress'],

    autoWatch: true,

    plugins: [
      'karma-jasmine',
      'karma-bro',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher'
    ],

    proxies: {
      '/': 'http://localhost:9876/'
    },

    urlRoot: '/__karma__/',

    files: [
      'bower_components/angular-mocks/angular-mocks.js',
      'app/js/main.js',
      'test/unit/**/*.js'
    ]

  };

  config.set(configuration);

};
