function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('Login', {
      url: '/login',
      controller: 'LoginCtrl',
      controllerAs: 'ctrl',
      templateUrl: 'pages/login/login.html',
      title: 'Login'
    })
    .state('Home', {
      url: '/',
      controller: 'BooksCtrl',
      controllerAs: 'ctrl',
      templateUrl: 'pages/books/books.html',
      title: 'Home'
    });

  $urlRouterProvider.otherwise('/login');

}

Routes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

export default Routes;
