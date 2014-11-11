'use strict';

var angular = require('angular');

// core modules
require('./core');

// feature modules
require('./foo');

// create and bootstrap application
angular.element(document).ready(function() {

  angular.module('app', ['app.core', 'app.foo']);

  angular.bootstrap(document, ['app']);

});
