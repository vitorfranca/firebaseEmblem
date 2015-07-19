'use strict';

module.exports = angular.module('fire-emblem', [
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
    })
    .factory('_', function() {
        return require('underscore');
    });