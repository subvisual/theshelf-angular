'use strict';

describe('Unit: theshelf.components.books_list BooksListCtrl', function() {
  var ctrl;

  beforeEach(function() {
    module('theshelf.components.books_list');

    inject(function($controller) {
      ctrl = $controller('BooksListCtrl');
    });
  });

  it('populates books property', function() {
    // should really test that it calls some request method somewhere
    expect(ctrl.books.length).to.equal(2);
  });
});
