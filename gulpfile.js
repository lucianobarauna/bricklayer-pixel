const gulp = require('gulp')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const browserSync = require('browser-sync').create()

// gulp.task( 'taskPug', function taskPug(){
//     return gulp.src('src/pug/*.pug')
//                .pipe(pug({
//                             pretty: '\t',
//                             compileDebug: false
//                     }))
//                .pipe( gulp.dest('public/') )
//                .pipe(browserSync.stream({stream:true}) )
// });

// gulp.task( 'default', ['taskPug', 'taskSass'], function startServe(){
//     browserSync.init({
//         server: './public'
//     });
//     gulp.watch('src/sass/*.scss', ['taskPug']);
//     gulp.watch('src/sass/*.scss', ['taskSass']);
//     gulp.watch('public/**/*').on( 'change', browserSync.reload )

// });


gulp.task('taskPug', () => {
  return gulp.src('src/pug/*.pug')
  .pipe(pug({
      pretty: '\t',
      compileDebug: false
  }))
  .pipe(gulp.dest('public/'))
  .pipe(browserSync.reload())
})

gulp.task('taskSass', function taskSass(){
    return gulp.src('src/sass/*.scss')
               .pipe(sourcemaps.init())
               .pipe(
                    sass({
                          outputStyle: 'compressed',
                          sourceComments: 'map'
                        }).on('error', sass.logError)
                )
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest('public/css/'))
                .pipe(browserSync.stream({stream:true}))
})

gulp.task('create-server', () => browserSync.init({
  server: {
      baseDir: './public/'
  }
}))

gulp.task('default', [
  'create-server',
  'taskPug',
  'taskSass'
], () => {
  return gulp.watch('src/pug/*.pug', ['taskPug'])
             .watch('src/sass/*.scss', ['taskSass'])
})
