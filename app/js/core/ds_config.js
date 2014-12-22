'use strict';

let angular = require('angular');

function DSConfig(DSHttpAdapterProvider, DSProvider, AppSettings) {
  angular.extend(DSHttpAdapterProvider.defaults.$httpConfig, {
    headers: {
      // TODO use dynamic token
      Authorization: 'Token token=pm0vuTfnJnZ_uK7MjEoFrQ',
      Accept: AppSettings.apiAcceptHeader
    }
  });

  DSProvider.defaults.baseUrl = AppSettings.apiUrl;
}

DSConfig.$inject = ['DSHttpAdapterProvider', 'DSProvider', 'AppSettings'];

module.exports = DSConfig;
