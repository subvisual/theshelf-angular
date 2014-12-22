'use strict';

function Auth($q, Session, CurrentUser, AuthHeaders, AppSettings) {
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

  return {
    restoreSession,
    login,
    get isAuthenticated() { return Session.isAuthenticated; }
  };
}

Auth.$inject = ['$q', 'Session', 'CurrentUser', 'AuthHeaders', 'AppSettings'];

module.exports = Auth;
