'use strict';

module.exports = angular.module('fire-emblem')
    .config(function($stateProvider) {
        $stateProvider
            .state('root.characters.list', {
                url: "/list",
                templateUrl: "/app/states/characters/list/charactersList.html",
                controller: function($scope, characters) {
                    $scope.characters = characters.all;
                }
            });
    });
