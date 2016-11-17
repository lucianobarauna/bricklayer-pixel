// Minifica e concatena
module.exports = function (gulp, plugins, config) {
  gulp.task("buildUsemin", function(){
      return gulp.src(config.htmlSrcPath)
                 .pipe(plugins.usemin({
                      js: [plugins.uglify],
                      css: [plugins.autoprefixer(config.autoprefix),
                            plugins.cssmin
                           ]
                 }))
                 .pipe(gulp.dest(config.srcDist));
  });
};
