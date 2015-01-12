function Session($q, DS, SessionStorage, CurrentUser) {
  let SessionDS = DS.defineResource('session');

  let handleSessionResponse = (response) => {
    /* jshint camelcase: false */
    let token = response.authentication_token;
    let uid = response.id;
    return { uid, token };
  };

  let createSessionFulfilledHandler = (resolve) => {
    return (response) => {
      let sessionData = handleSessionResponse(response);
      SessionStorage.create(sessionData);
      CurrentUser.create(sessionData);
      resolve();
    };
  };

  let createSessionErrorHandler = (reject) => {
    return () => reject('Invalid credentials');
  };

  let create = (email, password) => {
    return $q((resolve, reject) => {
      SessionDS.create({ user: { email, password } })
        .then(
          createSessionFulfilledHandler(resolve),
          createSessionErrorHandler(reject)
        );
    });
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

export default Session;
