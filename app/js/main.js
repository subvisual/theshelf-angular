import angular from 'angular';

// feature modules
import './core';
import './auth';

// page modules
import './login_page';
import './books_page';

// component modules
import './components/side_content';
import './components/books_list';
import './components/search_bar';

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
