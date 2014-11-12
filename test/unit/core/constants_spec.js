/*global angular */

'use strict';

describe('Unit: Constants', function() {

  var constants;

  beforeEach(function() {
    // instantiate the theshelf.core module
    angular.mock.module('theshelf.core');

    // mock the directive
    angular.mock.inject(function(AppSettings) {
      constants = AppSettings;
    });
  });

  it('should exist', function() {
    expect(constants).toBeDefined();
  });

  it('should have an application name', function() {
    expect(constants.appTitle).toEqual('Example Application');
  });

});
