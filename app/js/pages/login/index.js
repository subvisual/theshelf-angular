import angular from 'angular';

import loginCtrl from './login_ctrl';

export default angular.module('theshelf.pages.login', [])
  .controller('LoginCtrl', loginCtrl);
