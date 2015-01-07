'use strict';

function Session($q, DS, SessionStorage, CurrentUser) {
  let SessionDS = DS.defineResource('session');

  let handleSessionResponse = (response) => {
    /* jshint camelcase: false */
    let token = response.authentication_token;
    let uid = response.id;
    return { uid, token };
  };

  let create = (email, password) => {
    let deferred = $q.defer();

    SessionDS.create({ user: { email, password } })
      .then((response) => {
        let sessionData = handleSessionResponse(response);
        SessionStorage.create(sessionData);
        CurrentUser.create(sessionData);

        deferred.resolve();
      }, () => {
        deferred.reject('Invalid credentials');
      });

    return deferred.promise;
  };

  let destroy = () => {
    SessionStorage.destroy();
    CurrentUser.destroy();
  };

  let restore = () => {
    let sessionData = SessionStorage.retrieve();
    if (sessionData) {
      CurrentUser.create(sessionData);
    }
  };

  let onCurrentUserChanged = (cb) =>
    CurrentUser.onChange(cb);

  return {
    create,
    destroy,
    restore,
    onCurrentUserChanged,
    get currentUser() { return CurrentUser.retrieve(); },
    get isAuthenticated() { return !!SessionStorage.retrieve(); }
  };
}

Session.$inject = ['$q', 'DS', 'SessionStorage', 'CurrentUser'];

module.exports = Session;
