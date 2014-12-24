'use strict';

function DSConfig(DSProvider, AppSettings) {
  DSProvider.defaults.baseUrl = AppSettings.apiUrl;
}

DSConfig.$inject = ['DSProvider', 'AppSettings'];

module.exports = DSConfig;
