'use strict';

describe('Unit: Core AppSettings', function() {

  var appSettings;

  beforeEach(function() {
    module('theshelf.core');

    inject(function(AppSettings) {
      appSettings = AppSettings;
    });
  });

  it('should exist', function() {
    expect(appSettings).to.exist;
  });

  it('should have an application name', function() {
    expect(appSettings.appTitle).to.equal('The Shelf');
  });

});
