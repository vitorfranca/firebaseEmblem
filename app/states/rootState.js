app.config(function($stateProvider) {
    $stateProvider
        .state('root', {
            abstract: true,
            templateUrl: '/app/states/root.html',
            url: ""
        });
});