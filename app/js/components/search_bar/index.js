'use strict';

let angular = require('angular');

module.exports = angular.module('theshelf.search_bar', [])
  .directive('searchBar', require('./search_bar'))
  .controller('SearchBarCtrl', require('./search_bar_ctrl'));
