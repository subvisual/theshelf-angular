'use strict';

module.exports = function(config) {

  var configuration = {

    basePath: '../',
    frameworks: ['mocha', 'sinon-chai', 'browserify'],
    preprocessors: {
      'app/js/**/*.js': ['browserify']
    },
    browsers: ['Firefox', 'Chrome', 'PhantomJS'],
    reporters: ['progress'],

    autoWatch: true,

    proxies: {
      '/': 'http://localhost:9876/'
    },

    urlRoot: '/__karma__/',

    files: [
      'bower_components/angular-mocks/angular-mocks.js',
      'app/js/main.js',
      'test/unit/**/*.js'
    ],

    browserify: {
      debug: true,
      transform: [ 'es6ify' ]
    }

  };

  config.set(configuration);

};
