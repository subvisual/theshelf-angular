'use strict';

var angular = require('angular');

// core modules
require('./core');

// feature modules
require('./foo');

// create and bootstrap application
angular.element(document).ready(function() {

  angular.module('theshelf', ['theshelf.core', 'theshelf.foo']);

  angular.bootstrap(document, ['theshelf']);

});
