'use strict';

let angular = require('angular');
require('angular-ui-router');
require('angular-data');
require('angular-messages');
require('./templates');

module.exports = angular.module('theshelf.core', ['ui.router', 'templates', 'angular-data.DS', 'ngMessages'])
  .constant('AppSettings', require('./constants'))
  .factory('User', require('./models/user'))
  .config(require('./routes'))
  .config(require('./ds_config'))
  .run(require('./on_run'));
