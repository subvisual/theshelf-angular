'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('E2E: Example', function() {

  beforeEach(function() {
    browser.get('/');
    browser.waitForAngular();
  });

  it('should route correctly', function() {
    expect(browser.getLocationAbsUrl()).to.eventually.equal('/');
  });

  it('should show the number defined in the controller', function() {
    var element = browser.findElement(by.css('.number-example'));
    expect(element.getText()).to.eventually.equal('1234');
  });

});
