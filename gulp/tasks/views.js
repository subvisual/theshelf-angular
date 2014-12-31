'use strict';

var config         = require('../config');
var gulp           = require('gulp');
var templateCache  = require('gulp-angular-templatecache');
var preprocess     = require('gulp-preprocess');

// Views task
gulp.task('views', function() {

  // Put our index.html in the dist folder
  gulp.src('app/index.html')
    .pipe(preprocess({ context: { ENV: global.env } }))
    .pipe(gulp.dest(config.dist.root));

  // Process any other view files from app/views
  return gulp.src(config.views.src)
    .pipe(templateCache({
      standalone: true
    }))
    .pipe(gulp.dest(config.views.dest));

});
