const gulp = require('gulp'),
	md2pdf = require('gulp-markdown-pdf'),
	concat = require('gulp-concat')

gulp.task('pdf', () => {
	gulp.src(['./rules/index.md', './rules/components/index.md', './rules/components/zone/index.md', './rules/components/dice_roll/index.md', './rules/components/card/index.md', './rules/components/card/class/index.md', './rules/components/card/class/event/index.md'])
		.pipe(concat('dml.md'))
		.pipe(md2pdf())
		.pipe(gulp.dest('build'))
})
