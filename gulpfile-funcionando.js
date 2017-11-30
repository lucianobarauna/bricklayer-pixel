var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var reload = browserSync.reload;

/**
 * Compile pug files into HTML
 */
gulp.task('templates', function () {
  // var YOUR_LOCALS = {
  //     message: 'This app is powered by gulp.pug recipe for BrowserSync'
  // };

  return gulp
    .src('./src/**/*.pug')
    .pipe(
    pug(
      {
        // locals: YOUR_LOCALS
      })
    )
    .pipe(gulp.dest('./dist/'));
});

/**
 * Important!!
 * Separate task for the reaction to `.pug` files
 */
gulp.task('pug-watch', ['templates'], reload);

/**
 * Sass task for live injecting into all browsers
 */
gulp.task('sass', function () {
  return gulp
    .src('./src/assets/scss/*.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./dist/css'))
    .pipe(reload({ stream: true }));
});

/**
 * Serve and watch the scss/pug files for changes
 */
gulp.task('default', ['sass', 'templates'], function () {
  browserSync({ server: './dist' });

  gulp.watch('./src/assets/scss/*.scss', ['sass']);
  gulp.watch('./src/**/*.pug', ['pug-watch']);
});
