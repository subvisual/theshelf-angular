'use strict';

var expect = require('../test_helper').expect;
var BooksPage = require('./pages/books_page');

describe('E2E: List books', function() {

  beforeEach(function() {
    this.page = new BooksPage();
    this.page.get();
  });

  it('should route correctly', function() {
    expect(browser.getLocationAbsUrl()).to.eventually.equal('/');
  });

  it('lists all books', function() {
    element.all(this.page.bookRepeater).then(function(rows) {
      expect(rows.length).to.equal(2);
    });
  });

  it('filter books by title', function() {
    expect(this.page.firstBook.getText()).to.eventually.equal('SMACSS');
    this.page.booksSearchBox.sendKeys('P');
    expect(this.page.firstBook.getText()).to.eventually.equal('POODR');
  });
});
