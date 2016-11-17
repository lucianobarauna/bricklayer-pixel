// Inicia diretorio raiz com favicon
module.exports = function (gulp, plugins, config) {
  gulp.task("favico", ["clean"], function(){
      return gulp.src(config.favIcoSrcPath)
                 .pipe(gulp.dest(config.favIcoSrcDist));
  });
};
