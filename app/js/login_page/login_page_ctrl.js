'use strict';

class LoginPageCtrl {
  constructor($state, Auth) {
    this.$state = $state;
    this.Auth = Auth;
  }

  login() {
    this.dataLoading = true;
    this.Auth.login(this.email, this.password)
      .then(() => {
        this.$state.go('Home');
        this.dataLoading = false;
      }, (error) => {
        this.error = error;
        this.dataLoading = false;
      });
  }
}

LoginPageCtrl.$inject = ['$state', 'Auth'];

module.exports = LoginPageCtrl;
