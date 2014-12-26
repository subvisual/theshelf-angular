'use strict';

function OnRun($rootScope, $location, Auth) {
  Auth.restoreSession();

  $rootScope.$on('$locationChangeStart', function () {
    if ($location.path() !== '/login' && !Auth.isAuthenticated) {
      $location.path('/login');
    }

    if ($location.path() === '/login' && Auth.isAuthenticated) {
      $location.path('/');
    }
  });
}

OnRun.$inject = ['$rootScope', '$location', 'Auth'];

module.exports = OnRun;
