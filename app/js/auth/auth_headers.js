'use strict';

function AuthHeaders($http) {
  return {
    setAuthorization(token) {
      $http.defaults.headers.common.Authorization = `Token token=${token}`;
    },
    resetAuthorization() {
      delete $http.defaults.headers.common.Authorization;
    }
  };
}

AuthHeaders.$inject = ['$http'];

module.exports = AuthHeaders;
