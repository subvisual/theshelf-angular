import angular from 'angular';

import loginPageCtrl from './login_page_ctrl';

module.exports = angular.module('theshelf.login_page', [])
  .controller('LoginPageCtrl', loginPageCtrl);
