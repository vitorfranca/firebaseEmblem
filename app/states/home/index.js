'use strict';

module.exports = angular.module('fire-emblem')
    .config(function($stateProvider) {
        $stateProvider
            .state('root.home', {
                url: "/",
                templateUrl: "app/states/home/home.html"
            });
    });