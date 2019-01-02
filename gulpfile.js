'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./source/frost.scss')
  .pipe(sass.sync({outputStyle:'expanded'}).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 10 versions'],
    cascade: true,
  }))
  .pipe(gulp.dest('./dist/'));
});

gulp.task('minify', function () {
  return gulp.src('./source/frost.scss')
  .pipe(sass.sync({outputStyle:'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 10 versions'],
    cascade: false,
  }))
  .pipe(rename('frost.min.css'))
  .pipe(gulp.dest('./dist/'));
});


gulp.task('watch', function () {
  gulp.watch('./source/**/*.scss', gulp.series(['sass','minify']));

});
