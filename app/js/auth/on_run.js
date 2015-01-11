function OnRun($rootScope, $location, Session) {
  Session.restore();

  $rootScope.$on('$locationChangeStart', function () {
    if ($location.path() !== '/login' && !Session.isAuthenticated) {
      $location.path('/login');
    }

    if ($location.path() === '/login' && Session.isAuthenticated) {
      $location.path('/');
    }
  });
}

OnRun.$inject = ['$rootScope', '$location', 'Session'];

module.exports = OnRun;
