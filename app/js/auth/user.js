'use strict';

function UserModel($q, DS) {
  let currentUser;

  let User = DS.defineResource({
    name: 'user',
    endpoint: 'users',
    methods: {
      name: function () {
        return `${this.first_name} ${this.last_name}`;
      }
    }
  });

  User.findCurrentUser = (uid) => {
    let deferred = $q.defer();

    if (currentUser) {
      deferred.resolve(currentUser);
    } else {
      User.find(uid).then(
        (user) => {
          currentUser = user;
          deferred.resolve(currentUser);
        },
        deferred.reject
      );
    }

    return deferred.promise;
  };

  return User;
}

UserModel.$inject = ['$q', 'DS'];

module.exports = UserModel;
