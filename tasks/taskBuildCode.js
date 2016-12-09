// Minifica, concatena codigos js/css e move para build
module.exports = function (gulp, plugins, config) {
    gulp.task("buildCode", function(){
        return gulp.src(config.htmlSrcPath)
                   .pipe(plugins.usemin({
                        copyDist:[],
                        jsLib:[plugins.uglify],
                        jsScript:[plugins.uglify],

                   }))
                   .pipe(gulp.dest(config.srcDist));
  });
};
