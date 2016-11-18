// Copia as fontes para o diretorio dist
module.exports = function (gulp, plugins, config) {
  gulp.task("copyFont", function(){
      return gulp.src(config.fontSrcPath)
                 .pipe(gulp.dest(config.fontSrcDist));
  });
};
