const browserSync = require('browser-sync').create()
const del = require('del')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')

const reload = browserSync.reload

gulp.task('taskClearDist', () => {
  del('./dist/**/*')
})

gulp.task('taskHtml', () => {
  gulp.src('./src/*.html')
      .pipe(gulp.dest('./dist/'))
});

gulp.task('taskSass', () => {
  gulp.src('./src/sass/*.scss')
      .pipe(sourcemaps.init())
      .pipe(
        sass().on('error', sass.logError)
      )
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./dist/css'))
      .pipe(browserSync.stream());

})

gulp.task('taskServer', ['taskSass'], () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  })
  gulp.watch("src/sass/**/*.scss", ['taskSass'])
  gulp.watch("./dist/**/*").on('change', reload);
})

gulp.task('taskDist', ['taskClearDist'], () => {
  gulp.start('taskHtml', 'taskSass', 'taskServer')
})

gulp.task('default', ['taskDist'])
// gulp.task('default', ['taskBuild', 'taskWatch', 'taskBrowserSync'])
