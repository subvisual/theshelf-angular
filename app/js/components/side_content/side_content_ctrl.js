'use strict';

function SideContentCtrl($state, Session) {
  let init = () => {
    Session.onCurrentUserChanged(() => this.currentUser = Session.currentUser);
  };

  init();

  this.logout = () => {
    Session.destroy();
    $state.go('Login');
  };
}

SideContentCtrl.$inject = ['$state', 'Session'];

module.exports = SideContentCtrl;
