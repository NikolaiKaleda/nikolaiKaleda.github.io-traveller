'use strict';

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint'),
    uncss = require('gulp-uncss'),
    fixmyjs = require("gulp-fixmyjs"),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    csscomb = require('gulp-csscomb'),
    htmlhint = require("gulp-htmlhint"),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    del = require('del'),
    runSequence = require('run-sequence');


//CLEAN
gulp.task('clean', (cb) => {
    return del(["dest"], cb);
});

//HTML
gulp.task('index', function () {
    gulp.src('src/*.html')
        .pipe(htmlhint())
        .pipe(gulp.dest('dest'));
});

//CSS
gulp.task('style', function () {
    return gulp.src(['src/style/main-style/main.scss', 'src/style/*.scss'])
        //.pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        //.pipe(uncss({
        //        html: ['index.html', 'posts/**/*.html', 'http://example.com']
        //    }))
        .pipe(cleanCSS())
        .pipe(autoprefixer())
        .pipe(concat('style.css'))
        .pipe(csscomb())
        .pipe(sourcemaps.write('../maps', {
            addComment: false
        }))
        .pipe(gulp.dest('dest/style'));
});

//JS
gulp.task('script', function () {
    gulp.src('src/script/**/*.js')
        //.pipe(jshint())
        //.pipe(fixmyjs())
        .pipe(concat('script.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('dest/script'));
});

//IMAGE
gulp.task('img', function () {
    gulp.src('src/img/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dest/img'));
});

//FONTS
gulp.task('fonts', function () {
    gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('dest/fonts'));
});

//LIBS
gulp.task('libs', function () {
    gulp.src('src/libs/**/*.*')
        .pipe(gulp.dest('dest/libs'));
});



gulp.task('watch', function () {
    gulp.watch('dest/**/*.*', ['build']);
    gulp.watch('src/**/*.*', ['build']);
});

gulp.task('build', function (cb) {
    runSequence('clean', ['index', 'style', 'script', 'img', 'fonts', 'libs'], cb);
});

gulp.task('default', ['build', 'watch']);
