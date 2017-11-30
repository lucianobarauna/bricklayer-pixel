const browserSync = require('browser-sync')
const del = require('del')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const reload = browserSync.reload

gulp.task('taskPug', () => {
  gulp.src('./src/pug/*.pug')
      .pipe(plumber())
      .pipe(pug({
        pretty: '\t',
        compileDebug: true
      }))
      .pipe(gulp.dest('./dist/'))
      .pipe(reload({stream: true}))
})

gulp.task('taskPug:watch', ['taskPug'], reload);

gulp.task('taskSass', () => {
    gulp.src('./src/assets/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'))
    .pipe(reload({stream: true}))
})

gulp.task('taskClearDist', () => {
  del('./dist/**/*')
})

gulp.task('taskServer', () => {
  browserSync.init({ server: './dist' });
  gulp.watch('./src/assets/sass/**/*.scss', ['taskSass']);
  gulp.watch('./src/pug/**/*.pug', ['taskPug:watch']);
})

gulp.task('default', ['taskServer', 'taskSass', 'taskPug', 'taskClearDist']);


