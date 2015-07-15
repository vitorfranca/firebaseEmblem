app.config(function($stateProvider) {
  $stateProvider
    .state('root.characters.details', {
      url: "/name/:name",
      templateUrl: "states/characters/characters.html"
    });
});
