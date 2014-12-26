'use strict';

let angular = require('angular');
require('angular-storage');

module.exports = angular.module('theshelf.auth', ['angular-storage'])
  .factory('Auth', require('./auth'))
  .factory('User', require('./user'))
  .factory('CurrentUser', require('./current_user'))
  .factory('Session', require('./session'))
  .factory('AuthHeaders', require('./auth_headers'))
  .run(require('./http_config'))
  .run(require('./on_run'));
