'use strict';

let apiVersion = '1';

let AppSettings = {
  appTitle: 'The Shelf',
  apiUrl: 'http://0.0.0.0:8080/',
  apiAcceptHeader: `application/vnd.theshelf.v${apiVersion}+json`
};

module.exports = AppSettings;
