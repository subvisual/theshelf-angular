'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function(cb) {

  cb = cb || function() {};

  global.env = 'dev';

  runSequence('styles', 'images', 'views', 'lint', 'browserify', 'watch', cb);

});
