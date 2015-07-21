'use strict';

function characterCtrl($scope, characters, $stateParams, classes) {
    characters.get($stateParams.name).then(function(data) {
        $scope.character = data;
    });

    characters.getFullClassSet($stateParams.name).then(function(data) {
        $scope.classSet = data;
    });

    characters.getFullSkillSet($stateParams.name).then(function(data) {
        $scope.skillSet = data;
    });
}

module.exports = angular.module('fire-emblem')
    .config(function($stateProvider) {
        $stateProvider
            .state('root.characters.details', {
                url: "/name/:name",
                templateUrl: "/app/states/characters/details/character.html",
                controller: characterCtrl
            });
    });
