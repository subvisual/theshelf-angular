import angular from 'angular';
import 'angular-storage';

import session from './session';
import currentUser from './current_user';
import sessionStorage from './session_storage';
import headers from './headers';
import httpConfig from './http_config';
import onRun from './on_run';

export default angular.module('theshelf.auth', ['angular-storage'])
  .factory('Session', session)
  .factory('CurrentUser', currentUser)
  .factory('SessionStorage', sessionStorage)
  .factory('Headers', headers)
  .run(httpConfig)
  .run(onRun);
