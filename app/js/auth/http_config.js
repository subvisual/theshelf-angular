'use strict';

function HttpConfig($http, AppSettings) {
  $http.defaults.headers.common.Accept = AppSettings.apiAcceptHeader;
}

HttpConfig.$inject = ['$http', 'AppSettings'];

module.exports = HttpConfig;
