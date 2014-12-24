'use strict';

function CurrentUser($rootScope, User) {
  let currentUser;

  return {
    get user() { return currentUser; },
    setUser(uid) {
      User.find(uid)
        .then((user) => {
          currentUser = user;
          $rootScope.$broadcast('auth:current-user-changed', currentUser);
        });
    },
    reset() {
      currentUser = undefined;
      $rootScope.$broadcast('auth:current-user-changed', currentUser);
    }
  };
}

CurrentUser.$inject = ['$rootScope', 'User'];

module.exports = CurrentUser;
