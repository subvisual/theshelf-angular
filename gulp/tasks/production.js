'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prod', ['clean'], function(cb) {

  cb = cb || function() {};

  global.env = 'prod';

  runSequence('styles', 'images', 'views', 'browserify', cb);

});
