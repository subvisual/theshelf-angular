'use strict';

var gulp            = require('gulp');
var protractor      = require('gulp-protractor').protractor;
var webdriver       = require('gulp-protractor').webdriver;
/* jshint camelcase: false */
var webdriverUpdate = require('gulp-protractor').webdriver_update;
var config          = require('../config');

gulp.task('webdriver-update', webdriverUpdate);
gulp.task('webdriver', webdriver);

gulp.task('e2e', ['webdriver-update', 'webdriver', 'prepare_e2e', 'server'], function() {

  return gulp.src('test/e2e/**/*.js')
    .pipe(protractor({
      configFile: config.test.protractor
    }))
    .on('end', function() {
      global.server.close(
        function () { console.log('Server closed!'); }
      );
    })
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });

});
