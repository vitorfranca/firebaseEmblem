'use strict';

module.exports = angular.module('fire-emblem')
    .config(function($stateProvider) {
        $stateProvider
            .state('root.classes.details', {
                url: "/name/:name",
                templateUrl: "/app/states/classes/details/class.html"
            });
    });
