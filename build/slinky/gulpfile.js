var gulp = require('gulp'),
    inky = require('inky'),
    inlineCss = require('gulp-inline-css');


gulp.task('default', function() {
  return gulp.src('html/*.html')
    .pipe(inky())
    .pipe(inlineCss({
      applyLinkTags: true,    // Resolve external css files
      removeStyleTags: false // Don't remove as devices may still respond to media queries.
    }))
    .pipe(gulp.dest('dist'));
});

