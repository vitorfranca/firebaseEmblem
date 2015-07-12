app.config(function($stateProvider) {
  $stateProvider
    .state('characters.list', {
      url: "/list",
      templateUrl: "states/characters/list/charactersList.html",
      controller: function ($scope, characters) {
        $scope.characters = characters.all;
      }
    });
});
