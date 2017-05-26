var gulp = require('gulp'),
    fs = require('fs'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream');

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

gulp.task('js', function () {
    return browserify('Scripts/main.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gulp.dest('wwwroot/js'));
});

gulp.task('js:min', ['js'], function () {
    return gulp.src('wwwroot/js/main.js')
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('wwwroot/js'));
});

gulp.task('fonts', function () {
    return gulp.src('node_modules/bootstrap-sass/assets/fonts/bootstrap/*')
        .pipe(gulp.dest('wwwroot/fonts'));
});

gulp.task('default', ['sass', 'sass:min', 'js', 'js:min', 'fonts']);
