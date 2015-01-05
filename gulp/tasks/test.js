'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('test', [], function() {

  runSequence('unit', 'e2e');

});
