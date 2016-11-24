// Minifica, concatena codigos e move para build
module.exports = function (gulp, plugins, config) {
    gulp.task("buildCode", function(){
        return gulp.src(config.htmlSrcPath)
                   .pipe(plugins.usemin({
                        js:[plugins.uglify],
                        css:[plugins.autoprefixer, plugins.cssmin],
                   }))
                   .pipe(gulp.dest(config.srcDist));
  });
};
