const gulp = require('gulp')
const pug = require('gulp-pug')
const browserSync = require('browser-sync').create()


const pathSrc = {
    htmlTemplate: 'src/pug/*.pug'
}

const pathPublic = {
    baseDir: 'public/',
    html: 'public/*.html'

}


gulp.task('taskHtml', () => {
    return gulp.src(pathSrc.htmlTemplate)
               .pipe(pug(
            //        {
            //        pretty: '\t',
            //        compileDebug: false
            //    }
            ))
               .pipe(gulp.dest(pathPublic.baseDir))
})

gulp.task('taskWatch', () => {
    gulp.watch(pathSrc.htmlTemplate, ['taskHtml', browserSync.reload])
    // gulp.watch('src/*').on('change', browserSync.reload);
})

// Server
gulp.task('taskServer', () => {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    });
    // gulp.watch(pathSrc.htmlTemplate, ['taskHtml']);
    // gulp.watch('src/**/*')
    //     .on('change', browserSync.reload);
});

gulp.task('default', [
    'taskWatch',
    'taskServer'
])
