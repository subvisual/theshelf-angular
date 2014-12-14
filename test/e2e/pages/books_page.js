function BooksPage() {
  this.get = function() {
    browser.get('/');
    browser.waitForAngular();
  }

  this.bookRepeater = by.repeater('book in ctrl.books');
  this.firstBook = element(this.bookRepeater.row(0));
  this.booksSearchBar = element(by.css('search-bar'));
  this.booksSearchBox = this.booksSearchBar.element(by.model('ctrl.input'));
}

module.exports = BooksPage;
