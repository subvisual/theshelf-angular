'use strict';

/**
 * Logs in the application
 * @example
 * login()
 */
function login() {
  var Login = require('../pages/login');
  var page = new Login();
  httpBackend.onLoad.when('GET', /users\/2/).respond(200, mockData('user'));
  page.get();
  httpBackend.when('POST', /session/).respond(200, mockData('post_session'));
  page.login();
}

/** Logs in the application */
module.exports = login;
