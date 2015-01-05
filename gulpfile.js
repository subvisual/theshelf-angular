'use strict';

global.env = 'dev';
global.isProd = function() {
  return global.env === 'prod'
};
global.isDev = function() {
  return global.env === 'dev'
};
global.isTest = function() {
  return global.env === 'test'
};

require('./gulp');
