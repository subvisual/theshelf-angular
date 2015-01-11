let angular = require('angular');

module.exports = angular.module('theshelf.side_content', [])
  .directive('sideContent', require('./side_content'))
  .controller('SideContentCtrl', require('./side_content_ctrl'));
