const browserSync = require('browser-sync')
const del = require('del')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')

const reload = browserSync.reload


gulp.task('taskSass', () => {
  gulp
    .src('src/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(
        sass({
              outputStyle: 'compressed',
              sourceComments: 'map'
            }).on('error', sass.logError)
    )
    .pipe(sourcemaps.write('./'))
    .pipe(browserSync.stream({stream:true}))
    .pipe(gulp.dest('./public/css/'))
})

gulp.task('taskPug', () => {
  gulp
    .src('./src/pug/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest('./public'))
    .pipe(reload({stream: true}))
})

gulp.task('taskClearPublic', () => {
  del('./public/**/*')
})

gulp.task('taskWatch', () => {
  gulp.watch(['./src/sass/*.scss'], ['taskSass'])
  gulp.watch(['./src/pug/*.pug'], ['taskPug'])
})

gulp.task('taskBrowserSync', () => {
  browserSync.init({
    server: {
      baseDir: './public/'
    }
  })
})

gulp.task('taskPublic', ['taskClearPublic'], () => {
  gulp.start('taskSass', 'taskPug')
})

gulp.task('default', ['taskPublic', 'taskWatch', 'taskBrowserSync'])
// gulp.task('default', ['taskBuild', 'taskWatch', 'taskBrowserSync'])
