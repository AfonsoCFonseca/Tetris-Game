var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('libsJs', function(){
	return gulp.src(['src/js/*.js', 'libs/*.js'])
		.pipe(concat('build.js'))
		.pipe(gulp.dest('dist/js'))
});

gulp.task('libsCss', function(){
	return gulp.src('public/css/*.css')
		.pipe(concat('style.css'))
		.pipe(gulp.dest('dist/css'))
})
gulp.task('build', ['libsJs', 'libsCss']);

gulp.task('default', ['build']);
