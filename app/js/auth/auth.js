'use strict';

function Auth($rootScope, $http, $q, Session, CurrentUser, AuthHeaders, AppSettings) {
  let handleLoginResponse = (response) => {
    let token = response.data.authentication_token;
    let user = response.data;
    delete user.authentication_token;

    return { user, token };
  };

  let restoreSession = () => {
    if (Session.isAuthenticated) {
      CurrentUser.setUser(Session.uid);
      AuthHeaders.setAuthorization(Session.token);
    }
  };

  let login = (email, password) => {
    let deferred = $q.defer();

    $http.post(`${AppSettings.apiUrl}/session`, { user: { email, password } })
      .then((response) => {
        let authData = handleLoginResponse(response);
        Session.create(authData);
        CurrentUser.setUser(Session.uid);
        AuthHeaders.setAuthorization(Session.token);

        deferred.resolve();
      }, () => {
        deferred.reject('Invalid credentials');
      });

    return deferred.promise;
  };

  let logout = () => {
    Session.destroy();
    CurrentUser.reset();
    AuthHeaders.resetAuthorization();
  };

  let onCurrentUserChanged = (cb) =>
    $rootScope.$on('auth:current-user-changed', cb);

  return {
    onCurrentUserChanged,
    restoreSession,
    login,
    logout,
    get currentUser() { return CurrentUser.user; },
    get isAuthenticated() { return Session.isAuthenticated; }
  };
}

Auth.$inject = ['$rootScope', '$http', '$q', 'Session', 'CurrentUser', 'AuthHeaders', 'AppSettings'];

module.exports = Auth;
