// We want to define ourselves, but will need a printer to do so.
define(['printer'], function(printer) {
  return {
    run: function(scope) {
      // Test arguments
      if(scope == null || scope == undefined)
        throw "app.run require a 'scope' parameter, none given";

      // Validate scope or scope to child element.
      if(!scope.hasAttribute('data-module') || !scope.getAttribute('data-module') == 'app') {
        scope = scope.querySelector('[data-module="app"]');
        // Test Scope
        if(scope == null)
          throw 'Failed to find area for app module';
      }
      // Enable scope
      scope.classList.add('app');
      // Log
      printer.print('Application loaded');
    }
  };
});
