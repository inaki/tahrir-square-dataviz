'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	maps = require('gulp-sourcemaps'),
	del = require('del');

gulp.task('concatScripts', function(){
	// use return cuz' will be a dependency of other task
	return gulp.src([
		'bower_components/jquery/dist/jquery.min.js',
		'bower_components/d3/d3.min.js',
		'js/d3-transform.min.js',
		'bower_components/lodash/lodash.min.js',
		'js/jquery.easings.min.js',
		'bower_components/fullpage.js/jquery.fullPage.min.js',
		'js/main.js',
		'js/wheel.js',
		'js/chart-side.js'
	])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('js'));
});

gulp.task('minifyScripts', ['concatScripts'], function(){
	return gulp.src('js/app.js')
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('js'));
});

gulp.task('compileSass', function(){
	return gulp.src('scss/application.scss')
	.pipe(maps.init())
	.pipe(sass())
	.pipe(maps.write('./'))
	.pipe(gulp.dest('css'));

});

gulp.task('watchFiles', function(){
	// this scss/**/*.scss is called a gobbling pattern
	gulp.watch(['scss/**/*.scss'],['compileSass']);
	gulp.watch(['js/main.js'],['concatScripts']);
});

gulp.task('clean', function(){
	del(['dist', 'css/application.css*','js/app*.js*']);
});

gulp.task('build',['minifyScripts','compileSass'],function(){
	return gulp.src(['css/application.css','js/app.min.css','index.html',
		'img/**','fonts/**'], {base:'./'})
	pipe(gulp.dest('dist'));
});

gulp.task('serve',['watchFiles']);

gulp.task('default', ['clean'],  function(){
	gulp.start('build');
});





























