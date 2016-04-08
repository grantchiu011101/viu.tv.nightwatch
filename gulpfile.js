var gulp = require('gulp'),
    nightwatch = require('gulp-nightwatch');


gulp.task('default', [ 'nightwatch:chrome']);

gulp.task('nightwatch:chrome', function(){
  return gulp.src('tests/encore.js')
	.pipe(nightwatch({
	  configFile: 'tests/nightwatch.json',
	  cliArgs: {
		env: 'chrome'
	  }
	}));
});