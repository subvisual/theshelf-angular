'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var gutil        = require('gulp-util');
var source       = require('vinyl-source-stream');
var streamify    = require('gulp-streamify');
var watchify     = require('watchify');
var browserify   = require('browserify');
var uglifyify    = require("uglifyify")
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var es6ify       = require('es6ify');

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file) {
  var options = {
    cache: {},
    packagecache: {},
    fullpaths: true
  };

  if (!global.isProd) {
    options['debug'] = true;
  }

  var bundler = browserify(es6ify.runtime, options);

  if ( !global.isProd ) {
    bundler = watchify(bundler);
    bundler.on('update', function() {
      rebundle();
    });
  }

  bundler
    .add(config.browserify.entries)
    .transform(es6ify);
  if (global.isProd) {
    bundler.transform(uglifyify);
  }

  function rebundle() {
    var stream = bundler.bundle();

    gutil.log('Rebundle...');

    return stream.on('error', handleErrors)
      .pipe(source(file))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(browserSync.reload({ stream: true, once: true }));
  }

  return rebundle();

}

gulp.task('browserify', function() {

  return buildScript('main.js');

});
