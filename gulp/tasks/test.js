'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('test', ['lint_tests'], function() {

  runSequence('unit', 'e2e');

});
