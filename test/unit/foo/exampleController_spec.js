'use strict';

describe('Unit: Foo ExampleCtrl', function() {

  var ctrl;

  beforeEach(function() {
    // instantiate the theshelf.foo module
    angular.mock.module('theshelf.foo');

    // mock the controller
    angular.mock.inject(function($controller) {
      ctrl = $controller('ExampleCtrl');
    });
  });

  it('should exist', function() {
    expect(ctrl).to.exist;
  });

  it('should have a number variable equal to 1234', function() {
    expect(ctrl.number).to.equal(1234);
  });

  it('should have a title variable equal to \'AngularJS, Gulp, and Browserify!\'', function() {
    expect(ctrl.title).to.equal('AngularJS, Gulp, and Browserify!');
  });

});
