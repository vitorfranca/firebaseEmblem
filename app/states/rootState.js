'use strict';

module.exports = angular.module('fire-emblem')
    .config(function($stateProvider) {
        $stateProvider
            .state('root', {
                abstract: true,
                templateUrl: '/app/states/root.html',
                url: ""
            });
    });