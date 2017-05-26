var gulp = require('gulp'),
    fs = require('fs'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

// other content removed

gulp.task('sass', function () {
    return gulp.src('Styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('wwwroot/css'));
});

gulp.task('sass:min', ['sass'], function () {
    return gulp.src('wwwroot/css/main.css')
        .pipe(cssmin())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('wwwroot/css'));
});

gulp.task('js:min', function () {
    return gulp.src('wwwroot/js/site.js')
        .pipe(uglify())
        .pipe(rename('site.min.js'))
        .pipe(gulp.dest('wwwroot/js'));
});

gulp.task('default', ['sass', 'sass:min', 'js:min']);
