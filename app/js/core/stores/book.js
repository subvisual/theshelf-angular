'use strict';

function Book(DS) {
  return DS.defineResource({
    name: 'book',
    endpoint: 'books'
  });
}

Book.$inject = ['DS'];

module.exports = Book;
