import angular from 'angular';

import searchBar from './search_bar';
import searchBarCtrl from './search_bar_ctrl';

module.exports = angular.module('theshelf.search_bar', [])
  .directive('searchBar', searchBar)
  .controller('SearchBarCtrl', searchBarCtrl);
