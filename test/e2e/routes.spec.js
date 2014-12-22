'use strict';

describe('E2E: Routes', function() {

  it('redirects to the login page when the user is not authenticated', function() {
    browser.get('/');
    expect(browser.getLocationAbsUrl()).to.eventually.equal('/login');

    browser.get('/some-other-router');
    expect(browser.getLocationAbsUrl()).to.eventually.equal('/login');
  });

  it('redirects to the home page when authenticated user tries to go to the login page', function() {
    login();

    browser.get('/login');

    expect(browser.getLocationAbsUrl()).to.eventually.equal('/');
  });

});
