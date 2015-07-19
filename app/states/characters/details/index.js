'use strict';

module.exports = angular.module('fire-emblem')
    .config(function($stateProvider) {
        $stateProvider
            .state('root.characters.details', {
                url: "/name/:name",
                templateUrl: "/app/states/characters/characters.html",
                controller: function() {
                    console.log('characters details');
                }
            });
    });