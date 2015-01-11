let angular = require('angular');

module.exports = angular.module('theshelf.books_page', [])
  .controller('BooksPageCtrl', require('./books_page_ctrl'));
