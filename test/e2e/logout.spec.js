'use strict';

var SideContent = require('./pages/side_content');

describe('E2E: Logout', function() {
  beforeEach(function() {
    this.sideContent = new SideContent();
  });

  it('logs out successfully', function() {
    login();

    this.sideContent.logout();

    expect(browser.getLocationAbsUrl()).to.eventually.equal('/login');
  });
});
