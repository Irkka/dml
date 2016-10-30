const gulp = require('gulp'),
	md2pdf = require('gulp-markdown-pdf'),
	concat = require('gulp-concat')

gulp.task('pdf', () => {
	gulp.src(['./rules/**/*.md'])
		.pipe(concat('dml.md'))
		.pipe(md2pdf())
		.pipe(gulp.dest('build'))
})
