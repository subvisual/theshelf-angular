'use strict';

exports.config = {

  baseUrl: 'http://localhost:3000/',

  capabilities: {
    browserName: 'chrome',
    version: '',
    platform: 'ANY',
    chromeOptions: {
      args: [
        'incognito',
        'disable-extensions',
        'start-maximized',
        'enable-crash-reporter-for-testing'
      ]
    },
    loggingPrefs: {
      browser: 'ALL'
    }
  },

  framework: 'mocha',

  mochaOpts: {
    reporter: 'spec',
    timeout: 4000
  },

  specs: [
    'e2e/*.js'
  ]

};
