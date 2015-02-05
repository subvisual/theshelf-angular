'use strict';

var gulp       = require('gulp');
var styleguide = require('sc5-styleguide');
var config     = require('../config');

gulp.task('styleguide:generate', function() {
  return gulp.src(config.styles.src)
    .pipe(styleguide.generate({
        title: 'The Shelf Styleguide',
        server: true,
        port: 4000,
        rootPath: config.styleguide.dest,
        overviewPath: 'README.md'
      }))
    .pipe(gulp.dest(config.styleguide.dest));
});

gulp.task('styleguide:applystyles', function() {
  return gulp.src(config.styles.dest + '/main.css')
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(config.styleguide.dest));
});

gulp.task('watch-styleguide', ['styleguide'], function() {
  gulp.watch([config.styles.src], ['styleguide']);
});

gulp.task('styleguide', ['styles', 'styleguide:generate', 'styleguide:applystyles']);
