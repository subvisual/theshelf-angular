'use strict';

function SideContentCtrl($state, Auth) {
  let init = () => {
    Auth.onCurrentUserChanged(() => this.currentUser = Auth.currentUser);
  };

  init();

  this.logout = () => {
    Auth.logout();
    $state.go('Login');
  };
}

SideContentCtrl.$inject = ['$state', 'Auth'];

module.exports = SideContentCtrl;
