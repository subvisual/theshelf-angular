import angular from 'angular';

import booksList from './books_list';
import booksListCtrl from './books_list_ctrl';

module.exports = angular.module('theshelf.books_list', [])
  .directive('booksList', booksList)
  .controller('BooksListCtrl', booksListCtrl);
