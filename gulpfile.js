var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var gp_concat = require('gulp-concat');
var gp_rename = require('gulp-rename');
var gp_uglify = require('gulp-uglify');
var path = require('path');

gulp.task('css-main', function() {
    return gulp.src([ 
        './public/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
        './public/css/main.css',
        './public/css/animate.css'
    ])
        .pipe(gp_concat('style.min.css'))
        .pipe(autoprefixer('last 2 version'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./public/dist/css/'));
});
