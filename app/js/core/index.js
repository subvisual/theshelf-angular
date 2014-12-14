'use strict';

let angular = require('angular');
require('angular-ui-router');
require('./templates');

module.exports = angular.module('theshelf.core', ['ui.router', 'templates'])
  .constant('AppSettings', require('./constants'))
  .config(require('./routes'))
  .run(require('./on_run'));
