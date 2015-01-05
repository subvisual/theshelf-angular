'use strict';

function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('Home', {
      url: '/',
      controller: 'BooksPageCtrl',
      controllerAs: 'ctrl',
      templateUrl: 'books_page/books_page.html',
      title: 'Home'
    });

  $urlRouterProvider.otherwise('/');

}

Routes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

module.exports = Routes;
