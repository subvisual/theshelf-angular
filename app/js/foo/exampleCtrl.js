'use strict';

function exampleCtrl() {

  // ViewModel
  var vm = this;

  var log = msg => msg;
  vm.title = log('AngularJS, Gulp, and Browserify!');
  vm.number = 1234;

};

module.exports = exampleCtrl;
