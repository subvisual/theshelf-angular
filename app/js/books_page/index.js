import angular from 'angular';

import booksPageCtrl from './books_page_ctrl';

export default angular.module('theshelf.books_page', [])
  .controller('BooksPageCtrl', booksPageCtrl);
