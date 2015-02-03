/*@ngInject*/
function LoginCtrl($state, Session) {
  let ctrl = this;

  ctrl.login = login;

  function login() {
    ctrl.dataLoading = true;
    Session.create(ctrl.email, ctrl.password)
      .then(fulfilledHandler, rejectedHandler);
  }

  function fulfilledHandler() {
    $state.go('Home');
    ctrl.dataLoading = false;
  }

  function rejectedHandler(error) {
    ctrl.error = error;
    ctrl.dataLoading = false;
  }
}

export default LoginCtrl;
