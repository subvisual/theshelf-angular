'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prepare_e2e', ['clean'], function(cb) {

  cb = cb || function() {};

  global.env = 'test';

  runSequence('styles', 'images', 'views', 'browserify', cb);

});
