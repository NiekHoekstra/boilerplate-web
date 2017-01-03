var gulp = require('gulp'),
    inky = require('inky'),
    smoosher = require('gulp-smoosher');
    inlineCss = require('gulp-inline-css');


gulp.task('default', function() {
  return gulp.src('html/*.html')
    .pipe(inky())
    .pipe(smoosher())
    .pipe(inlineCss({
      applyLinkTags: true,        // Resolve external css files
      applyStyleTags: true,       // Inline as much as possible
      removeLinkTags: true,	  // Already inlined, don't need more external sources.
      preserveMediaQueries: true, // Some clients respect it.
      removeStyleTags: false      // Don't remove raw styles.
    }))
    .pipe(gulp.dest('dist'));
});

