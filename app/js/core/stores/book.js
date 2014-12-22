'use strict';

function Book(DS) {
  return DS.defineResource('books');
}

module.exports = Book;
