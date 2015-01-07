'use strict';

function SideContent() {
  this.logoutLink = element(by.css('side-content')).element(by.css('[ng-click="ctrl.logout()"]'));

  this.logout = function() {
    this.logoutLink.click();
  };
}

module.exports = SideContent;
