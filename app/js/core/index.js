import angular from 'angular';
import 'angular-ui-router';
import 'angular-data';
import 'angular-messages';
import './templates';

import appSettings from './app_settings';
import user from './models/user';
import routes from './routes';
import dsConfig from './ds_config';
import onRun from './on_run';

module.exports = angular.module('theshelf.core',
                                [
                                  'ui.router',
                                  'templates',
                                  'angular-data.DS',
                                  'ngMessages'
                                ])
  .constant('AppSettings', appSettings)
  .factory('User', user)
  .config(routes)
  .config(dsConfig)
  .run(onRun);
