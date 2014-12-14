'use strict';

let angular = require('angular');

module.exports = angular.module('theshelf.books_list', [])
  .directive('booksList', require('./books_list'))
  .controller('BooksListCtrl', require('./books_list_ctrl'));
