'use strict';

function LoginPageCtrl($state, Auth) {
  this.login = function() {
    this.dataLoading = true;
    Auth.login(this.email, this.password)
      .then(() => {
        $state.go('Home');
        this.dataLoading = false;
      }, (error) => {
        this.error = error;
        this.dataLoading = false;
      });
  };
}

LoginPageCtrl.$inject = ['$state', 'Auth'];

module.exports = LoginPageCtrl;
