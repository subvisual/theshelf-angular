'use strict';

class BooksPageCtrl {
  constructor() {
    this.searchText = '';
  }

  handleUserInput(input) {
    this.searchText = input;
  }
}

module.exports = BooksPageCtrl;
