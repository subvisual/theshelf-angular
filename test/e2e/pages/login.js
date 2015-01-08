'use strict';

function Login() {
  this.get = function() {
    browser.get('/login');
  };

  this.error = element(by.binding('ctrl.error'));
  this.emailInput = element(by.model('ctrl.email'));
  this.passwordInput = element(by.model('ctrl.password'));
  this.loginButton = element(by.buttonText('Login'));

  this.login = function() {
    this.emailInput.sendKeys('zeto@gmail.com');
    this.passwordInput.sendKeys('password');
    this.loginButton.click();
  };
}

module.exports = Login;
