'use strict';

let angular = require('angular');
require('angular-ui-router');
require('angular-data');
require('./templates');

module.exports = angular.module('theshelf.core', ['ui.router', 'templates', 'angular-data.DS'])
  .constant('AppSettings', require('./constants'))
  .factory('Book', require('./stores/book'))
  .config(require('./routes'))
  .config(require('./ds_config'))
  .run(require('./on_run'));
