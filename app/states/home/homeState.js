app.config(function($stateProvider) {
    $stateProvider
        .state('root.home', {
            url: "/",
            templateUrl: "app/states/home/home.html"
        });
});