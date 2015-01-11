function Headers($http) {
  return {
    setAuthorization(token) {
      $http.defaults.headers.common.Authorization = `Token token=${token}`;
    },
    resetAuthorization() {
      delete $http.defaults.headers.common.Authorization;
    }
  };
}

Headers.$inject = ['$http'];

module.exports = Headers;
