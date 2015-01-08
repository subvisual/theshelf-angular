import angular from 'angular';

import searchBar from './search_bar';
import searchBarCtrl from './search_bar_ctrl';

export default angular.module('theshelf.components.search_bar', [])
  .directive('searchBar', searchBar)
  .controller('SearchBarCtrl', searchBarCtrl);
