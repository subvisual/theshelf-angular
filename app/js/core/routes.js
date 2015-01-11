function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('Login', {
      url: '/login',
      controller: 'LoginPageCtrl',
      controllerAs: 'ctrl',
      templateUrl: 'login_page/login_page.html',
      title: 'Login'
    })
    .state('Home', {
      url: '/',
      controller: 'BooksPageCtrl',
      controllerAs: 'ctrl',
      templateUrl: 'books_page/books_page.html',
      title: 'Home'
    });

  $urlRouterProvider.otherwise('/login');

}

Routes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

module.exports = Routes;
