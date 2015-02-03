/*@ngInject*/
function HttpConfig($http, AppSettings) {
  $http.defaults.headers.common.Accept = AppSettings.apiAcceptHeader;
}

export default HttpConfig;
