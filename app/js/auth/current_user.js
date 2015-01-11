function CurrentUser($rootScope, User, Headers) {
  let currentUser;

  return {
    retrieve() { return currentUser; },
    create(data) {
      User.find(data.uid)
        .then((user) => {
          currentUser = user;
          Headers.setAuthorization(data.token);
          $rootScope.$broadcast('auth:current-user-changed', currentUser);
        });
    },
    destroy() {
      currentUser = undefined;
      Headers.resetAuthorization();
      $rootScope.$broadcast('auth:current-user-changed', currentUser);
    },
    onChange(cb) {
      $rootScope.$on('auth:current-user-changed', cb);
    }
  };
}

CurrentUser.$inject = ['$rootScope', 'User', 'Headers'];

module.exports = CurrentUser;
