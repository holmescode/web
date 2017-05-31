var gulp = require('gulp'),
    fs = require('fs'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream');

gulp.task('views', function () {
    return gulp.src('views/**/*.hbs')
        .pipe(gulp.dest('dist/views'));
});

gulp.task('images', function () {
    return gulp.src('client/images/**/*')
        .pipe(gulp.dest('dist/public/images'));
});

gulp.task('sass', function () {
    return gulp.src('client/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/public/styles'));
});

gulp.task('sass:min', ['sass'], function () {
    return gulp.src('dist/public/styles/main.css')
        .pipe(cssmin())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('dist/public/styles'));
});

gulp.task('js', function () {
     return browserify('client/scripts/main.js')
         .bundle()
         .pipe(source('main.js'))
         .pipe(buffer())
         .pipe(gulp.dest('dist/public/scripts'));
});

gulp.task('js:min', ['js'], function () {
    return gulp.src('dist/public/scripts/main.js')
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('dist/public/scripts'));
});

gulp.task('fonts', function () {
    return gulp.src('node_modules/bootstrap-sass/assets/fonts/bootstrap/*')
        .pipe(gulp.dest('dist/public/fonts'));
});

gulp.task('default', ['views', 'images', 'sass', 'sass:min', 'js', 'js:min', 'fonts']);
