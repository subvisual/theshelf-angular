let angular = require('angular');

// feature modules
require('./core');
require('./auth');

// page modules
require('./login_page');
require('./books_page');

// component modules
require('./components/side_content');
require('./components/books_list');
require('./components/search_bar');

angular.module('theshelf',
  [
    'theshelf.core',
    'theshelf.auth',
    'theshelf.login_page',
    'theshelf.books_page',
    'theshelf.side_content',
    'theshelf.books_list',
    'theshelf.search_bar'
  ]
);
