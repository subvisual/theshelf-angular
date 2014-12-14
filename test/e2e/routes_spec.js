'use strict';

var expect = require('../test_helper').expect;

describe('E2E: Routes', function() {

  it('should have a working home route', function() {
    browser.get('#/');
    expect(browser.getLocationAbsUrl()).to.eventually.equal('/');
  });

});
