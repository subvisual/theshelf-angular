'use strict';

let angular = require('angular');

module.exports = angular.module('theshelf.login_page', [])
  .controller('LoginPageCtrl', require('./login_page_ctrl'));
