'use strict';

var argv         = require('yargs').argv
var browserSync  = require('browser-sync');
var browserify   = require('browserify');
var config       = require('../config');
var es6ify       = require('es6ify');
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');
var uglifyify    = require("uglifyify")
var watchify     = require('watchify');

function buildScript(file) {
  var options = {
    cache: {},
    packagecache: {},
    fullpaths: true,
    debug: argv.debug
  };

  var bundler = browserify(es6ify.runtime, options);

  if ( !global.isProd ) {
    bundler = watchify(bundler);
    bundler.on('update', rebundle);
    bundler.on('log', function (msg) {
      gutil.log(gutil.colors.magenta(msg));
    })
  }

  bundler
    .add(config.browserify.entries)
    .transform(es6ify);

  if (global.isProd) { bundler.transform(uglifyify); }

  function rebundle() {
    gutil.log('Starting Watchify rebundle...');
    return bundler.bundle()
      .on('error', handleErrors)
      .pipe(source(file))
      .pipe(gulp.dest(config.scripts.dest))
      .on('end', function () {
        gutil.log('Finished Watchify rebundle');
      })
      .pipe(browserSync.reload({ stream: true, once: true }));
  }

  return rebundle();
}

gulp.task('browserify', function() {
  return buildScript('main.js');
});
