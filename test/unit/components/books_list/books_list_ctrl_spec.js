'use strict';

describe('Unit: BooksList BooksListCtrl', function() {
  var ctrl;

  beforeEach(function() {
    module('theshelf.books_list');

    inject(function($controller) {
      ctrl = $controller('BooksListCtrl');
    });
  });

  it('populates books property', function() {
    // should really test that it calls some request method somewhere
    expect(ctrl.books.length).to.equal(2);
  });
});
