'use strict';

function LoginPageCtrl($state, Session) {
  this.login = function() {
    this.dataLoading = true;
    Session.create(this.email, this.password)
      .then(() => {
        $state.go('Home');
        this.dataLoading = false;
      }, (error) => {
        this.error = error;
        this.dataLoading = false;
      });
  };
}

LoginPageCtrl.$inject = ['$state', 'Session'];

module.exports = LoginPageCtrl;
