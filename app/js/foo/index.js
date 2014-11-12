'use strict';

var angular = require('angular');

module.exports = angular.module('theshelf.foo', [])
  .controller('ExampleCtrl', require('./exampleCtrl'))
  .directive('exampleDirective', require('./exampleDirective'))
  .service('ExampleService', require('./exampleService'));
