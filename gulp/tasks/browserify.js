'use strict';

var argv         = require('yargs').argv;
var browserSync  = require('browser-sync');
var browserify   = require('browserify');
var config       = require('../config');
var to5ify       = require('6to5ify');
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');
var uglifyify    = require('uglifyify');
var watchify     = require('watchify');
var ngAnnotate   = require('browserify-ngannotate');

function buildScript(entryFile) {
  var bundler = browserify(entryFile, {
    cache: {},
    packagecache: {},
    fullpaths: true,
    debug: argv.debug
  });

  if (global.isDev()) {
    bundler = watchify(bundler);
    bundler.on('update', rebundle);
    bundler.on('log', function (msg) {
      gutil.log(gutil.colors.magenta(msg));
    });
  }

  bundler
    .transform(ngAnnotate)
    .transform(to5ify.configure({ ignore: /bower_components/ }));

  if (global.isProd()) { bundler.transform(uglifyify); }

  function rebundle() {
    return bundler.bundle()
      .on('error', handleErrors)
      .pipe(source(config.browserify.bundleName))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(browserSync.reload({ stream: true, once: true }));
  }

  return rebundle();
}

gulp.task('browserify', function() {
  var entryFile = config.browserify.mainEntry;
  if (global.isTest()) { entryFile = config.browserify.e2eEntry; }

  return buildScript(entryFile);
});
