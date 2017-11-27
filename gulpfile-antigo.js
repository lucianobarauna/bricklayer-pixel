const gulp = require('gulp')
const pug = require('gulp-pug')
const browserSync = require('browser-sync').create()


// const pathSrc = {
//     htmlTemplate: 'src/pug/*.pug'
// }

// const pathPublic = {
//     baseDir: 'public/',
//     html: 'public/*.html'

// }


// gulp.task('taskHtml', () => {
//     return gulp.src('src/pug/*.pug')
//                .pipe(pug({
//                    pretty: '\t',
//                    compileDebug: false
//                }))
//             .pipe(gulp.dest('public/'))
// })


// gulp.task('watch', ['taskHtml'], (done) => {
//     browserSync.reload();
//     done();
// })

// // Server
// gulp.task('taskServer', ['taskHtml'], () => {
//     browserSync.init({
//         server: {
//             baseDir: './public'
//         }
//     });

//     gulp.watch('src/pug/*.pug', ['watch']);
//     gulp.watch("public/*.html").on('change', browserSync.reload);


// });

// gulp.task('default', ['taskServer'])

gulp.task('taskHtml', function taskHtml(){
    return gulp.src('./src/pug/*.pug')
               .pipe(pug({
                //    pretty: '\t'
               }))
               .pipe(gulp.dest('./public/'))
               .pipe(browserSync.stream())
})

gulp.task('taskServer', function taskServer(){
    browserSync.init({
        server: './public'
    })
    gulp.watch('./src/pug/*.pug', ['taskHtml']);
    gulp.watch('./public/').on('change', browserSync.reload)
})

gulp.task('default', ['taskServer', 'taskHtml'])
