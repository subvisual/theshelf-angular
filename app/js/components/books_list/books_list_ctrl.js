'use strict';

class BooksListCtrl {
  constructor(Book) {
    Book.findAll().then(
     (books) => this.books = books
    );
  }

  loadBooks() {
    return [{ title: 'SMACSS' }, { title: 'POODR' }];
  }
}

BooksListCtrl.$inject = ['Book'];

module.exports = BooksListCtrl;
