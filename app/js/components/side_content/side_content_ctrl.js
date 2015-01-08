function SideContentCtrl($state, Session) {
  let ctrl = this;

  ctrl.logout = logout;

  init();

  function init() {
    Session.onCurrentUserChanged(() => ctrl.currentUser = Session.currentUser);
  }

  function logout() {
    Session.destroy();
    $state.go('Login');
  }
}

SideContentCtrl.$inject = ['$state', 'Session'];

export default SideContentCtrl;
