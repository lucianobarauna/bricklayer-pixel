// Copia bibliotecas
module.exports = function (gulp, plugins, config) {
  gulp.task("copyLibs", function(){
      return gulp.src(config.fontSrcPath)
                 .pipe(gulp.dest(config.fontSrcDist));
  });
};
