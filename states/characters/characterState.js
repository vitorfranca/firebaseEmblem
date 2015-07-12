app.config(function($stateProvider) {
  $stateProvider
    .state('characters', {
      url: "/characters/:name",
      templateUrl: "states/characters/characters.html"
    });
});
