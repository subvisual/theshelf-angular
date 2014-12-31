'use strict';

describe('Unit: Core Constants', function() {

  var constants;

  beforeEach(function() {
    module('theshelf.core');

    inject(function(AppSettings) {
      constants = AppSettings;
    });
  });

  it('should exist', function() {
    expect(constants).to.exist;
  });

  it('should have an application name', function() {
    expect(constants.appTitle).to.equal('The Shelf');
  });

});
