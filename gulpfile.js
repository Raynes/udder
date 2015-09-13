var gulp = require('gulp');
var babel = require('gulp-babel');
var mocha = require('gulp-mocha');

gulp.task("babel", function () {
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('lib'));
});

gulp.task("watch", function() {
  gulp.watch('src/**/*.js', ["babel"]);
});

gulp.task('test', function () {
  return gulp.src('tests/*.js')
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task("default", ["babel"]);
