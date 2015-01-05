'use strict';

let angular = require('angular');

// feature modules
require('./core');

// page modules
require('./books_page');

// component modules
require('./components/books_list');
require('./components/search_bar');

angular.module('theshelf',
  [
    'theshelf.core',
    'theshelf.books_page',
    'theshelf.books_list',
    'theshelf.search_bar'
  ]
);
