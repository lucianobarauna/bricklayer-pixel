// Minifica, concatena codigos e move para build
module.exports = function (gulp, plugins, config) {
  gulp.task("buildUsemin", function(){
      var configCss = [plugins.autoprefixer(config.autoprefix), plugins.cssmin];
      return gulp.src(config.htmlSrcPath)
                 .pipe(plugins.usemin({
                      js: [plugins.uglify],
                      css: configCss
                 }))
                 .pipe(gulp.dest(config.srcDist));
  });
};
