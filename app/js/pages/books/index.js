import angular from 'angular';

import booksCtrl from './books_ctrl';

export default angular.module('theshelf.pages.books', [])
  .controller('BooksCtrl', booksCtrl);
