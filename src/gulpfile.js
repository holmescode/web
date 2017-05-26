var gulp = require("gulp"),
    fs = require("fs"),
    sass = require("gulp-sass");

// other content removed

gulp.task("default", function () {
    return gulp.src('Styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('wwwroot/css'));
});
