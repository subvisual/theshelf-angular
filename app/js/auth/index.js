
let angular = require('angular');
require('angular-storage');

module.exports = angular.module('theshelf.auth', ['angular-storage'])
  .factory('Session', require('./session'))
  .factory('CurrentUser', require('./current_user'))
  .factory('SessionStorage', require('./session_storage'))
  .factory('Headers', require('./headers'))
  .run(require('./http_config'))
  .run(require('./on_run'));
