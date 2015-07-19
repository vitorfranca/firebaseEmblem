'use strict';

function characterComponentCtrl($scope, characters, $stateParams, classes) {
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

angular.module('fire-emblem')
    .directive('character', function() {
        return {
            templateUrl: '/app/components/character.html',
            controller: characterComponentCtrl,
            replace: false
        };
    });