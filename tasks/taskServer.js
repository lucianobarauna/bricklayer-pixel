// Start server
module.exports = function (gulp, plugins, config) {
  gulp.task('server', function(){
      plugins.browserSync.init({
          server: {
              baseDir: config.srcPath
          }
      });
      gulp.watch(config.srcWatch).on('change', plugins.browserSync.reload);
  });
};
