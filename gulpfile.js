var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	// concat = require('gulp-concat'),
	// uglify = require('gulp-uglifyjs'), 
	jade = require('gulp-jade'),
	plumber = require('gulp-plumber');

gulp.task('watch', ['sass', 'jade'], function() {
	browserSync.init({
        server: 'app'
    });
    gulp.watch('app/sass/**/*.scss', ['sass']);
	gulp.watch(['app/jade/**/*.jade'], ['jade']);
	gulp.watch(['app/index.html']).on('change', browserSync.reload);
});

//Sass
gulp.task('sass', function() {
    gulp.src('app/sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError)) 
    .pipe(sass({ includePaths : ['app/sass/'] }))
    .pipe(gulp.dest('app/css/'))
    .pipe(browserSync.stream());
});

//Jade
gulp.task('jade', function(){
    gulp.src('app/jade/index.jade')
    .pipe(plumber())
    .pipe(jade({
            pretty: true
        }))
    .pipe(gulp.dest('app/'));   
});

