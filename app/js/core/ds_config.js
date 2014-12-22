'use strict';

function DSConfig(DSHttpAdapterProvider, DSProvider, AppSettings) {
  DSProvider.defaults.baseUrl = AppSettings.apiUrl;
}

DSConfig.$inject = ['DSHttpAdapterProvider', 'DSProvider', 'AppSettings'];

module.exports = DSConfig;
