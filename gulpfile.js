const browserSync = require('browser-sync')
const del = require('del')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')

const reload = browserSync.reload


// Funcionando
// gulp.task('taskHtml', () => {
    //   gulp.src('./src/*.html')
    //       .pipe(gulp.dest('./dist/'))
    // });

gulp.task('taskSass', () => {
    gulp.src('./src/assets/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(
        sass().on('error', sass.logError)
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'))
    //   .pipe(browserSync.stream())
    .pipe(reload({stream: true}))

})

gulp.task('taskHtml', () => {
    gulp.src('./src/*.pug')
    .pipe(plumber())
    .pipe(pug({
      pretty: '\t',
      compileDebug: true
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(reload({stream: true}))
});

gulp.task('rebuild', ['taskHtml'], function () {
  reload();
});

gulp.task('taskClearDist', () => {
  del('./dist/**/*')
})

gulp.task('watch', () => {
  gulp.watch('src/assets/sass/**/*', ['taskSass'])
  gulp.watch('src/**/*.pug', ['rebuild'])
})


// gulp.task('taskServer', ['taskSass', 'taskHtml'], () => {
//   browserSync.init({
//     server: {
//       baseDir: "./dist"
//     }
//   })
//   gulp.watch("src/assets/sass/**/*.scss", ['taskSass'])
//   gulp.watch("src/**/*.pug", ['taskHtml'])
//   gulp.watch("./src/**/*").on('change', reload);
// })

gulp.task('taskServer', () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  })
})

gulp.task('taskDist', ['taskClearDist'], () => {
  gulp.start('taskSass', 'taskHtml')
})

gulp.task('default', ['taskDist', 'taskServer', 'watch'])
// gulp.task('default', ['taskBuild', 'taskWatch', 'taskBrowserSync'])
