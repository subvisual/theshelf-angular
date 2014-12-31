'use strict';

describe('Unit: SearchBar SearchBar', function() {
  var element;
  var outerScope;

  beforeEach(module('theshelf.search_bar'));
  beforeEach(module('karma.templates'));

  beforeEach(inject(function($rootScope, $compile) {
    element = angular.element('<search-bar on-user-input="userInputCallback()"></search-bar>');

    outerScope = $rootScope.$new();

    element = $compile(element)(outerScope);

    outerScope.$digest();
  }));

  describe('user input callback', function() {
    var callbackSpy;

    beforeEach(function() {
      callbackSpy = sinon.spy();
      outerScope.$apply(function() {
        outerScope.userInputCallback = callbackSpy;
      });
    });

    describe('when the user inputs something', function() {
      it('should be called', function() {
        var isolated = element.isolateScope();
        isolated.ctrl.onUserInput();
        expect(callbackSpy).to.have.been.called;
      });
    });
  });
});
