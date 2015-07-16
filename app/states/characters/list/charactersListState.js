app.config(function($stateProvider) {
    $stateProvider
        .state('root.characters.list', {
            url: "/list",
            templateUrl: "/app/states/characters/list/charactersList.html",
            controller: function($scope, characters) {
                $scope.characters = characters.all;
            }
        });
});