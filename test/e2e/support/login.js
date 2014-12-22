/**
 * Logs in the application
 * @example
 * login()
 */
var login = function() {
  var LoginPage = require('../pages/login_page');
  var page = new LoginPage();
  httpBackend.onLoad.when('GET', /users\/2/).respond(200, mockData('user'));
  page.get();
  httpBackend.when('POST', /session/).respond(200, mockData('post_session'));
  page.login();
}

/** Logs in the application */
module.exports = login;
