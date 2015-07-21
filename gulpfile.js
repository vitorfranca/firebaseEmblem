var gulp = require('gulp');
var watch = require('gulp-watch');
var cssmin = require("gulp-cssmin");
var concat = require("gulp-concat");
var stripCssComments = require('gulp-strip-css-comments');

var css = [
    './app/css/**/*.css'
];

gulp.task('minify-css', function() {
    gulp.src(css)
        .pipe(concat('app.min.css'))
    // .pipe(stripCssComments({
    //     all: true
    // }))
    // .pipe(cssmin())
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('default', ['minify-css']);

gulp.task('watch-css', function() {
    gulp.watch(css, ['minify-css']);
});
