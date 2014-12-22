'use strict';

let angular = require('angular');

// core modules
require('./core');
require('./auth');

// page modules
require('./login_page');
require('./books_page');

// component modules
require('./components/books_list');
require('./components/search_bar');

// create and bootstrap application
angular.element(document).ready(function() {

  angular.module('theshelf',
    [
      'theshelf.core',
      'theshelf.auth',
      'theshelf.login_page',
      'theshelf.books_page',
      'theshelf.books_list',
      'theshelf.search_bar'
    ]
  );

  angular.bootstrap(document, ['theshelf']);

});
