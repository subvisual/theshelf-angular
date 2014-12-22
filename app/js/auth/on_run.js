'use strict';

function OnRun($rootScope, $location, Auth) {
  Auth.restoreSession();

  $rootScope.$on('$locationChangeStart', function () {
    // redirect to login page if not logged in
    if ($location.path() !== '/login' && !Auth.isAuthenticated) {
      $location.path('/login');
    }

    // redirect to home page if logged in and going to login page
    if ($location.path() === '/login' && Auth.isAuthenticated) {
      $location.path('/');
    }
  });
}

OnRun.$inject = ['$rootScope', '$location', 'Auth'];

module.exports = OnRun;
