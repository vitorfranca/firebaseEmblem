app.config(function($stateProvider) {
    $stateProvider
        .state('root.characters', {
            abstract: true,
            template: '<ui-view/>',
            url: "/characters"
        });
});