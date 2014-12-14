'use strict';

function BooksList() {
  return {
    restrict: 'E',
    templateUrl: 'components/books_list/books_list.html',
    scope: {
      searchText: '@'
    },
    controller: 'BooksListCtrl',
    controllerAs: 'ctrl',
    bindToController: true
  };
}

module.exports = BooksList;
