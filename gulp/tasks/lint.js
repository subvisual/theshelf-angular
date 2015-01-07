'use strict';

var config = require('../config');
var gulp   = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint', function() {
  return gulp.src([config.scripts.src, 'gulpfile.js', 'gulp/**/*.js', '!app/js/core/templates.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('lint_tests', function() {
  return gulp.src([config.test.src])
    .pipe(jshint('.jshinttestsrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});
