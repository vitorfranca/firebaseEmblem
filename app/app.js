var app = angular.module('test', [
        "firebase",
        "ui.router"
    ])
    .config(function($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode({
            enabled: true
        });

        $urlRouterProvider.otherwise("/");
    })
    .run(function(characters, classes, skills) {
        console.debug('initializing services...');
    });