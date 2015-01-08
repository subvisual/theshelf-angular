import angular from 'angular';

import booksList from './books_list';
import booksListCtrl from './books_list_ctrl';

export default angular.module('theshelf.components.books_list', [])
  .directive('booksList', booksList)
  .controller('BooksListCtrl', booksListCtrl);
