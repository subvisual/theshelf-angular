/*@ngInject*/
function SideContentCtrl($state, Session) {
  let ctrl = this;

  ctrl.logout = logout;
  ctrl.currentUser = () => Session.currentUser;

  function logout() {
    Session.destroy();
    $state.go('Login');
  }
}

export default SideContentCtrl;
