app.config(function($stateProvider) {
    $stateProvider
        .state('root.characters.details', {
            url: "/name/:name",
            templateUrl: "/app/states/characters/characters.html"
        });
});