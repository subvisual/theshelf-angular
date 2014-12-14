'use strict';

var argv   = require('yargs').argv
var gulp   = require('gulp');
var karma  = require('gulp-karma');
var config = require('../config');

gulp.task('unit', function() {

  var autoWatch = argv.watch ? 'watch' : 'run';

  // Nonsensical source to fall back to files listed in karma.conf.js,
  // see https://github.com/lazd/gulp-karma/issues/9
  return gulp.src('./thisdoesntexist')
    .pipe(karma({
      configFile: config.test.karma,
      action: autoWatch
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });

});
