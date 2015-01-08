'use strict';

var Books = require('./pages/books');

describe('E2E: List books', function() {

  beforeEach(function() {
    login();

    this.page = new Books();
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
