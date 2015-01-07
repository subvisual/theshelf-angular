'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var HttpBackend = require('http-backend-proxy');

global.expect = chai.expect;
global.httpBackend = new HttpBackend(browser);
global.captureBrowserLog = require('./support/capture_browser_log');
global.screenshot = require('./support/screenshot');
global.mockData = require('./support/mock_data');
global.login = require('./support/login');

// clean localstorage and cookies after every test
afterEach(function () {
  browser.executeScript('window.localStorage.clear();');
  browser.manage().deleteAllCookies();
});

// each test should fail if browser console has errors
afterEach(function() {
  browser.manage().logs().get('browser')
    .then(function(browserLog) {
      var errors = browserLog.filter(function(x){ return x.level.name === 'SEVERE'; });
      if (errors.length) {
        console.log('Errors: ' + require('util').inspect(errors));
        expect(errors.length).to.equal(0);
      }
    });
});
