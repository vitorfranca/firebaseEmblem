app.config(function($stateProvider) {
  $stateProvider
    .state('characters.details', {
      url: "/name/:name",
      templateUrl: "states/characters/characters.html"
    });
});
