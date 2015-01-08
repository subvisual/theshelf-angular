import angular from 'angular';

// feature modules
import './core';
import './auth';

// page modules
import './pages/login';
import './pages/books';

// component modules
import './components/side_content';
import './components/books_list';
import './components/search_bar';

angular.module('theshelf',
  [
    'theshelf.core',
    'theshelf.auth',
    'theshelf.pages.login',
    'theshelf.pages.books',
    'theshelf.components.side_content',
    'theshelf.components.books_list',
    'theshelf.components.search_bar'
  ]
);
