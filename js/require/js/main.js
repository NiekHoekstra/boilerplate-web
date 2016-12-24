// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
console.log('main');
requirejs.config({
    baseUrl: '/js/lib',
    paths: {
        app: '../app'
        // Unlisted files will autoresolve to /js/lib/{name}
    }
});

// We require an app, forcing it to load the file and its dependencies.
require(['app'], function(app) {
  app.run(document.body) // Then we run it.
});
