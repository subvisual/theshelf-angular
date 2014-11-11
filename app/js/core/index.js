'use strict';

var angular = require('angular');
require('angular-ui-router');
require('./templates');

module.exports = angular.module('app.core', ['ui.router', 'templates'])
  .constant('AppSettings', require('./constants'))
  .config(require('./routes'))
  .run(require('./on_run'));
