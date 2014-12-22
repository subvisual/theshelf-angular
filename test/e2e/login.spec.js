'use strict';

var LoginPage = require('./pages/login_page');

describe('E2E: Login', function() {
  beforeEach(function() {
    this.page = new LoginPage();
  });

  it('should route correctly', function() {
    this.page.get();
    expect(browser.getLocationAbsUrl()).to.eventually.equal('/login');
  });

  it('logs in successfully', function() {
    this.page.get();
    httpBackend.when('POST', /session/).respond(200, mockData('post_session'));
    httpBackend.when('GET', /users\/2/).respond(200, mockData('user'));

    this.page.login();

    expect(browser.getLocationAbsUrl()).to.eventually.equal('/');
  });

  it('user tries to login with invalid credentials', function() {
    this.page.get();
    httpBackend.when('POST', /session/).respond(401);

    this.page.login();

    expect(browser.getLocationAbsUrl()).to.eventually.equal('/login');
    expect(this.page.error).not.to.eventually.be.empty;
  });

  it('logged in user keeps logged in after refreshing page', function() {
    httpBackend.onLoad.when('GET', /users\/2/).respond(200, mockData('user'));
    this.page.get();
    httpBackend.when('POST', /session/).respond(200, mockData('post_session'));
    this.page.login();

    browser.navigate().refresh();

    expect(browser.getLocationAbsUrl()).to.eventually.equal('/');
  });
});

