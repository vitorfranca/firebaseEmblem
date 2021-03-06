var gulp = require('gulp');
var watch = require('gulp-watch');
var cssmin = require("gulp-cssmin");
var concat = require("gulp-concat");
var stripCssComments = require('gulp-strip-css-comments');
var sass = require('gulp-sass');

var css = [
    './app/css/**/*.css'
];

gulp.task('sass', function() {
    gulp.src('./app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('minify-css', function() {
    gulp.src(css)
        .pipe(concat('app.min.css'))
    // .pipe(stripCssComments({
    //     all: true
    // }))
    // .pipe(cssmin())
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch-css', function() {
    gulp.watch(css, ['css']);
});

gulp.task('default', ['css']);
gulp.task('css', ['sass', 'minify-css']);