// Build projeto
module.exports = function (gulp, plugins, config) {
  gulp.task('build', ['favico'], function() {
  	gulp.start('buildImg', 'copyFont', 'buildUsemin');
  });
};
