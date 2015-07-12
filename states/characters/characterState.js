app.config(function($stateProvider) {
  $stateProvider
    .state('characters', {
      abstract: true,
      template: '<ui-view/>',
      url: "/characters"
    });
});
