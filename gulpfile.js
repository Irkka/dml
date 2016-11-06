const gulp = require('gulp'),
	md2pdf = require('gulp-markdown-pdf'),
	concat = require('gulp-concat')

gulp.task('pdf', () => {
	gulp.src(['./rules/index.md', './rules/components/index.md', './rules/components/dealer_token/index.md', './rules/components/zone/index.md', './rules/components/dice_roll/index.md', './rules/components/victory_condition/index.md', './rules/components/card/class/index.md', './rules/components/card/class/event/index.md', './rules/components/card/index.md', './rules/gameplay/index.md', './rules/gameplay/setup/index.md', './rules/gameplay/setup/index.md', './rules/gameplay/game/index.md', './rules/gameplay/game/buying/index.md', './rules/gameplay/end/index.md', './rules/gameplay/modes/index.md'])
		.pipe(concat('dml.md'))
		.pipe(md2pdf())
		.pipe(gulp.dest('build'))
})
