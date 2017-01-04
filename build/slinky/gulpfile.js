var gulp = require('gulp'),
    inky = require('inky'),
    smoosher = require('gulp-smoosher'),
    inlineCss = require('gulp-inline-css'),
    htmlmin = require('gulp-htmlmin');



gulp.task('default', function() {
  return build(false);
});
gulp.task('debug', function() {
  return build(true);

});
var build = function(debug) {
  return gulp.src('html/*.html')
    .pipe(inky())		  // Parse inky HTML and generate e-mail friendly tables
    .pipe(smoosher())		  // Resolve external style sheets into the html
    .pipe(inlineCss({		  // Inline the CSS into elements because e-mail clients don't always respect style elements.

      //applyLinkTags: true,      // Resolve external css files, now handled by smoosher
      applyStyleTags: true,       // Inline as much as possible
      removeLinkTags: true,	  // Already inlined, don't need more external sources.
      preserveMediaQueries: true, // Some clients respect it.
      removeStyleTags: true      // Don't remove raw styles.

    }))
    .pipe(htmlmin({
      collapseWhitespace: !debug,	// consider turning off for debug
      minifyURLs: false,		// In emails these should be properly formatted to begin with
      minifyCSS: !debug,		// Only minify when not debugging.
      preserveLineBreaks: true,		// Turning this off will create one large html file of one line (which breaks gedit at 54k characters on one line)	
      removeComments: !debug,		// Only keep comments in debug
      removeEmptyAttributes: false	// inky might have empty attrs for a reason
    }))
    .pipe(gulp.dest('dist'));
};

