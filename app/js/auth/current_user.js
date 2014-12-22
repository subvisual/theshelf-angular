'use strict';

function CurrentUser($rootScope, User) {
  return {
    setUser(uid) {
      User.findCurrentUser(uid)
        .then( (user) => $rootScope.currentUser = user );
    }
  };
}

CurrentUser.$inject = ['$rootScope', 'User'];

module.exports = CurrentUser;
