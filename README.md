# What & Why?

This is my public repository of boilerplate web-related code.
These can be CSS preprocessors, javascript minification/optimization toooling, build pipelines, etc.
Within the readme there are a lot of basic explanations of the tech as well.

The purpose is to facilitate in quickly setting up a development environment.
The web is a fragmented place and making comparisons can be a tedious business.
Sometimes you're unfamiliar with tooling, you need examples.
Other times you've not worked with it for a while and need a quick refresher/

# HTML

The html directory contains several html files, for a variety of purposes.
It has examples for OpenGraph and Twitter card integration along with HTML4 and HTML5 quick templates.
These are very minimalist but this only aids their clarity.

# Styles

The Styles are a collection of css preprocessors.
They contain a set of common mixins but their names might be a bit obtuse.
A common feature might be 'generate-columns'.
This specific example can be implemented in many ways, 
therefore there are multiple implementations available and examples for each.

## Sass

Syntactically Awesome Style Sheets (Sass)
[site](https://sass-lang.com) \| [docs](http://sass-lang.com/documentation/file.SASS_REFERENCE.html) 

Sass is an extension of CSS and which allows the writing of more concise css and use of template variables.
```css
div {
  color:black;
}
div a {
  color:blue;
}
div a:hover {
  color:royalblue;
}
```

```sass
$font-color: '#000';

div {
  color:$font-color;
  a{
    color:blue;
    &:hover {
      color:royalblue;
    }
  }
}
```

Usage:

```sh
$ sudo su -c "gem install sass"
$ sass --update sourceDirectory:targetDirectory
# Or watch a directory
$ sass --watch sourceDirectory:targetDirectory
```

## Less
Less is the competitor of Sass, with a similiar syntax
[site](http://lesscss.org/) \| [docs](http://lesscss.org/features/)

```css

```

```less

```

Usage:

```sh
$ npm install -g less
$ lessc file.less [file.css]
# minified
$ lessc --clean-css file.less [file.min.css]
```

# Javascript

Javascript can be a bit tedious.
So here's some tooling and boilerplates to make it a bit easier.
Install scripts are provided, after which you can just copy-paste the core project files.

## NPM uglify-js
[JS NPM uglify-js](https://www.npmjs.com/package/uglify-js)

```sh
$ npm install -g uglify-js
$ uglifyjs [input] [options]
$ uglifyjs --compress input.js
$ uglifyjs file1.js file2.js -o file.min.js --source-map file.min.js.map
```
## Babel
Babel is an EcmaScript 6 compiler, which compiles ES6 to javascript.


Usage:

```sh
$ npm install --save-dev babel-preset-env
# config package.json
$ npm run build

```

## Intern
Intern is a Javascript framework for testing Web sites and applications.
It can be run on Node OR IN A BROWSER!

# Hybrid

## Yuicompressor

[Github](http://yui.github.io/yuicompressor/)

```sh
java -jar yuicompressor-x.y.z.jar input.js -o output.js --charset utf-8
java -jar yuicompressor-x.y.z.jar input.css -o output.css --type=css|js --charset utf-8
```

# Build

These are build tools with boilerplate configuration options.
As such, you would expect debug and release configurations along with a 'watch' option.

## Gulp

Gulp [docs](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

```sh
$ npm install -g gulp-cli
$ cd ./myProject
$ npm init
$ npm install gulp --save-dev gulp
# add gulpfile.js
# todo: find 'watch' plugin
# https://knpuniversity.com/screencast/gulp/watch ?
$ gulp
```

## Grunt

```sh
$ npm install -g grunt-cli
$ cd ./myProject
$ npm init
$ npm install grunt --save-dev
# add gruntfile.js
# tip: add grunt-contrib-watch task
# https://mijingo.com/blog/watching-your-grunt-files-for-changes
$ grunt watch

```

## Webpack 1

## Webpack 2

## SystemJS

## Rollup

## jspm

