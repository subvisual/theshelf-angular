'use strict';

describe('Unit: theshelf.pages.books BooksCtrl', function() {

  var ctrl;

  beforeEach(function() {
    module('theshelf.pages.books');

    inject(function($controller) {
      ctrl = $controller('BooksCtrl');
    });
  });

  it('should exist', function() {
    expect(ctrl).to.exist;
  });

  it('should have an initial searchText state', function() {
    expect(ctrl.searchText).to.equal('');
  });

  describe('#handleUserInput', function() {
    it('updates searchText with the user input', function() {
      var input = 'some input';

      ctrl.handleUserInput(input);

      expect(ctrl.searchText).to.equal(input);
    });
  });
});
