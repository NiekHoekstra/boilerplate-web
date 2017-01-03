# TODO

# Bugs

There's a bug in inline-css where applyLinkTags (resolve style sheets) doesn't perserve media queries when the relevat parameter (preserveMediaQueries) is enabled.
The bug was files as a feature in the appropriate repository:
Ref: https://github.com/jonkemp/inline-css/issues/14

A workaround has been found inn smoosher, which brings css and js files into the document body.
Reference: https://github.com/jonkemp/gulp-inline-css/issues/23#issuecomment-219031319
