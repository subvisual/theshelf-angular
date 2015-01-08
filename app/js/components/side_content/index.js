import angular from 'angular';

import sideContent from './side_content';
import sideContentCtrl from './side_content_ctrl';

export default angular.module('theshelf.components.side_content', [])
  .directive('sideContent', sideContent)
  .controller('SideContentCtrl', sideContentCtrl);
